Polymer({
  is : 'emp-list',

  properties: {
    empDetails : {
      type: Array,
      notify: true,
      value: []
    },
    emp: {
      type: Object,
      value: {}
    },
    edit: {
      type: Boolean,
      value: false
    }
  },

  attached: function() {
    this.$.ajaxReq.generateRequest();
  },

  loadData: function(e) {
    this.set('empDetails', this.empDetails.concat(e.detail.response));
  },

  openModal: function() {
    this.$.addDetails.open();
  },

  closeModal: function() {
    if (this.edit) {
      this.set('edit', false);
      this.set('index', null);
    }
    this.set('emp', {});
    this.$.addDetails.close();
  },

  editItem: function(e) {
    this.set('emp', e.model.item);
    this.set('index', e.model.index);
    this.set('edit', true);
    this.openModal();
  },

  deleteItem: function(e) {
    this.splice('empDetails', e.model.index, 1);
  },

  createNewRecord: function() {
    if (this.edit) {
      this.splice('empDetails', this.index, 1, this.emp);
      // me.notifyPath('rule.tpList.#' + me.tpIndex + '.isOfferSelected');
      this.notifyPath('empDetails.#' + this.index + '.firstName');
    } else {
      this.push('empDetails', this.emp);
    }
    this.closeModal();
  }
});
