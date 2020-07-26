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
            let clientIpData = customerData.get('client-ip-address');

            if (clientIpData().primary) {
                this.ipAddr(clientIpData().primary);
                this.visible(true);

                if ((clientIpData().data_id + 3600) < Math.floor(Date.now() / 1000)) {
                    customerData.invalidate(['client-ip-address']);
                }
            } else {
                customerData.reload(['client-ip-address'], false);
            }

            clientIpData.subscribe(function (ip) {
                this.ipAddr(ip.primary);
                this.visible(true);
            }.bind(this));
        },

        invalidate: function () {
            customerData.invalidate(['client-ip-address']);
        }
    });
});
