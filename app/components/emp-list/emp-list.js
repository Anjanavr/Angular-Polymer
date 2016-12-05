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
    },
    title: {
      type: String,
      value: 'Add'
    }
  },

  behaviors: [
    'Polymer.IronValidatorBehavior'
  ],

  attached: function() {
    this.$.ajaxReq.generateRequest();
  },

  loadData: function(e) {
    this.set('empDetails', this.empDetails.concat(e.detail.response));
  },

  addItem: function() {
    this.set('title', 'Add');
    this.$.empForm.reset();
    this.openModal();
  },

  confirmDelete: function(e) {
    this.set('index', e.model.index);
    this.$.deleteConfirm.open();
  },

  closeConfirm: function() {
    this.$.deleteConfirm.close();
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
    this.$,empForm.reset();
  },

  editItem: function(e) {
    this.set('title', 'Edit');
    this.set('emp', e.model.item);
    this.set('index', e.model.index);
    this.set('edit', true);
    this.openModal();
  },

  deleteItem: function() {
    this.splice('empDetails', this.index, 1);
    this.set('index', null);
    this.closeConfirm();
  },

  createNewRecord: function() {
    if (this.$.empForm.validate()) {
      if (this.edit) {
        this.splice('empDetails', this.index, 1, this.emp);
        this.notifyPath('empDetails.#' + this.index + '.firstName');
        this.notifyPath('empDetails.#' + this.index + '.lastName');
        this.notifyPath('empDetails.#' + this.index + '.state');
        this.notifyPath('empDetails.#' + this.index + '.email');
        this.notifyPath('empDetails.#' + this.index + '.phone');
      } else {
        this.push('empDetails', this.emp);
      }
      this.closeModal();
    } else {
      return;
    }
  },

  // validate: function(values) {
  //   console.log(values);
  // }
});
