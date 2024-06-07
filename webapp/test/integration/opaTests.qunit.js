sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'fioriapp/test/integration/FirstJourney',
		'fioriapp/test/integration/pages/Fashion_ItemsList',
		'fioriapp/test/integration/pages/Fashion_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Fashion_ItemsList, Fashion_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('fioriapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFashion_ItemsList: Fashion_ItemsList,
					onTheFashion_ItemsObjectPage: Fashion_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);