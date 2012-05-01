Ext.define('Ssp.view.admin.forms.ConfidentialityLevelAdmin', {
	extend: 'Ext.grid.Panel',
	alias : 'widget.confidentialityleveladmin',
	title: 'Admin',
	id: 'ConfidentialityLevelAdmin',
	height: '100%',
	width: '100%',

    initComponent: function(){
    	var cellEditor = Ext.create('Ext.grid.plugin.RowEditing', 
		                             { clicksToEdit: 2 });
    	Ext.apply(this,
    			{
    		      autoScroll: true,
    		      plugins:cellEditor,
    		      selType: 'rowmodel',
    		      columns: [
    		                { header: 'Name',  
    		                  dataIndex: 'name',
    		                  field: {
    		                      xtype: 'textfield'
    		                  },
    		                  flex: 50 },
    		                { header: 'Description',
    		                  dataIndex: 'description', 
    		                  flex: 50,
    		                  field: {
    		                      xtype: 'textfield'
    		                  },
    		                  flex: 50 },
      		                { header: 'Acronym',
      		                  dataIndex: 'acronym', 
      		                  flex: 50,
      		                  field: {
      		                      xtype: 'textfield'
      		                  }
    		                }
    		           ],
    		        
    		           dockedItems: [
    		       		{
    		       			xtype: 'pagingtoolbar',
    		       		    dock: 'bottom',
    		       		    displayInfo: true,
    		       		    pageSize: 15
    		       		},

    		              {
    		               xtype: 'toolbar',
    		               items: [{
    		                   text: 'Add',
    		                   iconCls: 'icon-add',
    		                   handler: function(){
    		                   	var item = new Ssp.model.reference.ConfidentialityLevel();
    		           			item.set('name','default');
    		                   	this.up('grid').getStore().insert(0, item );
    		                   	this.up('grid').plugins[0].startEdit(0, 0);
    		                   }
    		               }, '-', {
    		                   text: 'Delete',
    		                   iconCls: 'icon-delete',
    		                   handler: function(){
    		                   	var selection = this.up('grid').getView().getSelectionModel().getSelection()[0];
    		                       if (selection) {
    		                       	this.up('grid').getStore().remove( selection );           	
    		                       }
    		                   }
    		               }]
    		           }]    	
    	});
    	this.callParent(arguments);
    },
    
    reconfigure: function(store, columns) {
        var me = this,
            headerCt = me.headerCt;

        if (me.lockable) {
            me.reconfigureLockable(store, columns);
        } else {
            if (columns) {
                headerCt.suspendLayout = true;
                headerCt.removeAll();
                headerCt.add(columns);
            }
            if (store) {
                store = Ext.StoreManager.lookup(store);
                me.down('pagingtoolbar').bindStore(store);
                me.bindStore(store);        
            } else {
                me.getView().refresh();
            }
            if (columns) {
                headerCt.suspendLayout = false;
                me.forceComponentLayout();
            }
        }
        me.fireEvent('reconfigure', me);
    }

});