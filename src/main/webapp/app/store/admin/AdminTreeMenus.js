Ext.define('Ssp.store.admin.AdminTreeMenus',{
	extend: 'Ext.data.TreeStore',
    root: {
    	text: 'Administrative Tools',
    	title: 'Administrative Tools',
    	form: '',
        expanded: true,
        children: [
					{
						text: 'Student Intake',
						title: 'Student Intake',
						form: '',
						expanded: true,
						children: [
								{
									text: 'Child Care Arrangements',
									title: 'Child Care Arrangements',
									store: 'childCareArrangements',
							        form: 'AbstractReferenceAdmin',
									leaf: true
								},
								{
									text: 'Citizenships',
									title: 'Citizenships',
									store: 'citizenships',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Education Goals',
							    	title: 'Education Goals',
							    	store: 'educationGoals',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Education Levels',
							    	title: 'Education Levels',
							    	store: 'educationLevels',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Ethnicities',
							    	title: 'Ethnicities',
							    	store: 'ethnicities',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Funding Sources',
							    	title: 'Funding Sources',
							    	store: 'fundingSources',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Marital Statuses',
							    	title: 'Marital Statuses',
							    	store: 'maritalStatuses',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Student Statuses',
							    	title: 'Student Statuses',
							    	store: 'studentStatuses',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
							    ,{
							    	text: 'Veteran Statuses',
							    	title: 'Veteran Statuses',
							    	store: 'veteranStatuses',
							        form: 'AbstractReferenceAdmin',
									leaf: true
							    }
						]
					},{
						text: 'Action Plan',
						title: 'Action Plan',
						form: '',
						expanded: false,
						children: [{
									text: 'Categories',
									title: 'Categories',
									store: 'categories',
									form: 'AbstractReferenceAdmin',
									leaf: true
								},
								{
									text: 'Challenges',
									title: 'Challenges',
									store: 'challenges',
									form: 'ChallengeAdmin',
									leaf: true
								},{
									text: 'Referrals',
									title: 'Referrals',
									store: 'referrals',
									form: 'AbstractReferenceAdmin',
									leaf: true
								}]
					},{
						text: 'Self Help Guide',
						title: 'Self Help Guide',
						form: '',
						expanded: false,
						children: []
					},{
						text: 'Security',
						title: 'Security',
						form: '',
						expanded: false,
						children: [{text: 'Confidentiality Levels',
									title: 'Confidentiality Levels',
									store: 'confidentialityLevels',
									form: 'ConfidentialityLevelAdmin',
									leaf: true }]
					},{
						text: 'Campus',
						title: 'Campus',
						form: '',
						expanded: false,
						children: [{text: 'Campuses',
									title: 'Campuses',
									store: 'campuses',
									form: 'AbstractReferenceAdmin',
									leaf: true }]
					}
                   
        ]

    },

	folderSort: true,
	sorters: [{
	    property: 'text',
	    direction: 'ASC'
	}]

});