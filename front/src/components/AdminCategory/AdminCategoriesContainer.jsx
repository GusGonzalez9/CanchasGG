/* IMPORTS */
// Config
import React from 'react'
import { connect } from 'react-redux'
// Components
import globalStyle from '../../styles/style.css'
import style from './style.css'
import AdminCategoryContainer from './AdminCategoryContainer'
import AdminCategoryForm from './AdminCategoryForm'
import Empty from './Empty'
// Functions
import {fetchCategories, addCategory} from '../../store/action-creators/categories'

const mapStateToProps = (state) => ({
    categories: state.categories
})
  
const mapDispatchToProps = dispatch =>  ({
  fetchCategories: () => dispatch(fetchCategories()),
  addCategory: (name) => dispatch(addCategory(name)),
});

class AdminCategoriesContainer extends React.Component {
    constructor(){
      super()

      this.state = {
        name: ''
      }
      this.changesHandler = this.changesHandler.bind(this)
      this.submitHandler = this.submitHandler.bind(this)
    }

    changesHandler(e){
        this.setState({
            name: e.target.value,
        })
    }

    submitHandler(name){
        this.state.name === ''
        ? console.error('Input name can not be empty')
        : (this.props.addCategory(name), this.setState({name: ''}))
    }

    componentDidMount(){
      this.props.fetchCategories()
    }
  
    render() {
        const {categories} = this.props
          return (
            <div>
              <h1 className={globalStyle.h1}>Categories</h1>
              <div className={style.categories}>
              <AdminCategoryForm
                    name={this.state.name}
                    changesHandler={this.changesHandler}
                    submitHandler={this.submitHandler}
              />
                  {categories.list && categories.list[0]
                  ? categories.list.map((category, index) =>
                    <AdminCategoryContainer
                            key={category.id}
                            category={category}
                            index={index}
                    />)
                  : <Empty/>
                  }
              </div>

            </div>
          )
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AdminCategoriesContainer);