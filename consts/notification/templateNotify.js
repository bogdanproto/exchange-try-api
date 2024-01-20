class TemplateNotify {
  static Type = {
    customer_offer: 'customer_offer',
    customer_update: 'customer_update',
    customer_remove: 'customer_remove',
  };

  constructor({ initiator, recipient, source }) {
    this.initiator = initiator;
    this.recipient = recipient;
    this.source = source;
  }

  getMessage(type) {
    switch (type) {
      case TemplateNotify.Type.customer_offer: {
        return `${this.initiator?.name} made an offer for you proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
      case TemplateNotify.Type.customer_update: {
        return `${this.initiator?.name} updated an offer for you proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
      case TemplateNotify.Type.customer_remove: {
        return `${this.initiator?.name} revoked an offer for you proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
    }
  }
}

module.exports = { TemplateNotify };
