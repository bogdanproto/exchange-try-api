const { TemplateNotify } = require('../../consts');

const notifyHandler = arr => {
  return arr.map(
    ({
      _id,
      initiator,
      recipient,
      statusNotify,
      typeNotify,
      source,
      createdAt,
    }) => {
      const template = new TemplateNotify({ initiator, recipient, source });

      return {
        _id,
        initiator,
        message: template.getMessage(typeNotify),
        statusNotify,
        createdAt,
      };
    }
  );
};

module.exports = notifyHandler;
