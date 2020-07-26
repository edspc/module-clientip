define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function (Component, customerData) {
    'use strict';

    return Component.extend({
        defaults: {
            visible: false,
            ipAddr: false
        },

        initObservable: function () {
            this._super().observe('visible ipAddr');

            return this;
        },

        initialize: function () {
            this._super();
            let clientIp = customerData.get('client-ip-address');

            if (clientIp().primary) {
                this.ipAddr(clientIp().primary);
            }

            clientIp.subscribe(function (ip) {
                this.ipAddr(ip.primary);
            }.bind(this));

            this.visible(true);
        },
    });
});
