const typeNotify = {
  customer_offer: 'customer_offer',
  customer_update: 'customer_update',
  customer_remove: 'customer_remove',
  owner_status_accepted: 'owner_status_accepted',
  owner_status_rejected: 'owner_status_rejected',
  cancel_source: 'cancel_source',
};

Object.freeze(typeNotify);

const statusNotify = {
  viewed: 'viewed',
  notviewed: 'notviewed',
};

Object.freeze(statusNotify);

class TemplateNotify {
  constructor({ initiator, recipient, source }) {
    this.initiator = initiator;
    this.recipient = recipient;
    this.source = source;
  }

  getMessage(type) {
    switch (type) {
      case typeNotify.customer_offer: {
        return `${this.initiator?.name} made an offer for you proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
      case typeNotify.customer_update: {
        return `${this.initiator?.name} updated an offer for you proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
      case typeNotify.customer_remove: {
        return `${this.initiator?.name} revoked an offer for you proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
      case typeNotify.owner_status_accepted: {
        return `${this.initiator?.name} accepted your offer for proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.customerTime}`;
      }
      case typeNotify.owner_status_rejected: {
        return `${this.initiator?.name} rejected your offer for proposal: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.ownerTime}`;
      }
      case typeNotify.cancel_source: {
        return `${this.initiator?.name} canceled the upcoming meeting: ${this.source?.spot?.spot} | ${this.source?.ownerDate} | ${this.source?.customerTime}. Reason is indicated in canceled proposals`;
      }
    }
  }
}

module.exports = { TemplateNotify, typeNotify, statusNotify };
