const moment = require('moment');

const toCheakIsDateFuture = date => {
  const currentDate = moment().startOf('day');
  const userDate = moment(date, 'YYYY-MM-DD', true);

  if (!userDate.isValid()) {
    return 'errorDateFormat';
  }
  if (userDate.isBefore(currentDate)) {
    return 'errorDateInPast';
  }
  return date;
};

module.exports = toCheakIsDateFuture;
