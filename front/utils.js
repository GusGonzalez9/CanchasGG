const getRate = function () {
    return Rate.findAll({ where: { productId: this.id } }).then((data) => {
      let rate = 0;
      data.forEach((e) => {
        rate += e.content;
      });
      return rate / data.length;
    });
  };