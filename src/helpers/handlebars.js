const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (fieldName, sort) => {
          const sortType = fieldName === sort.column ? sort.type : 'default';
          const icons = {
                default: 'fa fa-sort',
                asc: 'fa fa-sort-asc',
                desc: 'fa fa-sort-desc',
          };
          const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc',
          }
          const icon = icons[sortType] // depends on the sort.type
          const type = types[sortType]

          const href = Handlebars.Utils.escapeExpression(`?_sort&column=${fieldName}&type=${type}`);

          return `<a href="${href}" style="font-size:15px"><button><i class="${icon}"></i></button></a>`;
    }
}