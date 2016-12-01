Polymer({
  is : 'emp-list',

  properties: {
    empDetails : {
      type: Array,
      value: []
    },
    list: {
      type: Array,
      value: []
    }
  },

  attached: function() {
    this.$.ajaxReq.generateRequest();
  },

  loadData: function(e) {
    this.set('empDetails', this.empDetails.concat(e.detail.response));
  },

  createNewRecord: function() {
    
  }
});
