Polymer({
  is : 'emp-list',

  properties: {
    empDetails : {
      type: Array,
      value: []
    }
  },

  attached: function() {
    // this.$.ajaxReq.generateReq();
  },

  loadData: function() {
    
  }
});
