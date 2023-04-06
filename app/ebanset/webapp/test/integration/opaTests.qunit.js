sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ebanset/test/integration/FirstJourney',
		'ebanset/test/integration/pages/ebanSetList',
		'ebanset/test/integration/pages/ebanSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, ebanSetList, ebanSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ebanset') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheebanSetList: ebanSetList,
					onTheebanSetObjectPage: ebanSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);