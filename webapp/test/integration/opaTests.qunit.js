sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'flexui5app02/test/integration/FirstJourney',
		'flexui5app02/test/integration/pages/ItemsMain'
    ],
    function(JourneyRunner, opaJourney, ItemsMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('flexui5app02') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheItemsMain: ItemsMain
                }
            },
            opaJourney.run
        );
    }
);