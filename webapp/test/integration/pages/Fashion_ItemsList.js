sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'fioriapp',
            componentId: 'Fashion_ItemsList',
            contextPath: '/Fashion_Items'
        },
        CustomPageDefinitions
    );
});