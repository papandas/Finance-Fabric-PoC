/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var orderStatus = {
    Created: {code: 1, text: 'Order Created'},
    Bought: {code: 2, text: 'Order Purchased'},
    Cancelled: {code: 3, text: 'Order Cancelled'},
    Ordered: {code: 4, text: 'Order Submitted to Provider'},
    ShipRequest: {code: 5, text: 'Shipping Requested'},
    Delivered: {code: 6, text: 'Order Delivered'},
    Delivering: {code: 15, text: 'Order being Delivered'},
    Backordered: {code: 7, text: 'Order Backordered'},
    Dispute: {code: 8, text: 'Order Disputed'},
    Resolve: {code: 9, text: 'Order Dispute Resolved'},
    PayRequest: {code: 10, text: 'Payment Requested'},
    Authorize: {code: 11, text: 'Payment Approved'},
    Paid: {code: 14, text: 'Payment Processed'},
    Refund: {code: 12, text: 'Order Refund Requested'},
    Refunded: {code: 13, text: 'Order Refunded'}
};

/**
 * create an order to purchase
 * @param {org.acme.Z2BTestNetwork.CreateOrder} purchase - the order to be processed
 * @transaction
 */
function CreateOrder(purchase) {
    purchase.order.buyer = purchase.buyer;
    purchase.order.amount = purchase.amount;
    purchase.order.financeCo = purchase.financeCo;
    /*
    ** Your Code Goes Here
    */
}
/**
 * Record a request to purchase
 * @param {org.acme.Z2BTestNetwork.Buy} purchase - the order to be processed
 * @transaction
 */
function Buy(purchase) {
    if (purchase.order.status = JSON.stringify(orderStatus.Created))
    {
        purchase.order.buyer = purchase.buyer;
        purchase.order.seller = purchase.seller;
    /*
    ** Your Code Goes Here
    */
    }
}
/**
 * Record a request to cancel an order
 * @param {org.acme.Z2BTestNetwork.OrderCancel} purchase - the order to be processed
 * @transaction
 */
function OrderCancel(purchase) {
    if ((purchase.order.status = JSON.stringify(orderStatus.Created)) || (purchase.order.status = JSON.stringify(orderStatus.Bought)))
    {
        purchase.order.buyer = purchase.buyer;
        purchase.order.seller = purchase.seller;
        /*
        ** Your Code Goes Here
        */
    }
}
/**
 * Record a request to order by seller from supplier
 * @param {org.acme.Z2BTestNetwork.OrderFromSupplier} purchase - the order to be processed
 * @transaction
 */
function OrderFromSupplier(purchase) {
    if (purchase.order.status = JSON.stringify(orderStatus.Bought))
    {
        purchase.order.provider = purchase.provider;
        /*
        ** Your Code Goes Here
        */
    }
}
/**
 * Record a request to ship by supplier to shipper
 * @param {org.acme.Z2BTestNetwork.RequestShipping} purchase - the order to be processed
 * @transaction
 */
function RequestShipping(purchase) {
    if (purchase.order.status = JSON.stringify(orderStatus.Ordered))
    {
        purchase.order.shipper = purchase.shipper;
        /*
        ** Your Code Goes Here
        */
    }
}
/**
 * Record a delivery by shipper
 * @param {org.acme.Z2BTestNetwork.Delivering} purchase - the order to be processed
 * @transaction
 */
function Delivering(purchase) {
    if ((purchase.order.status = JSON.stringify(orderStatus.ShipRequest)) || (JSON.parse(purchase.order.status).code = orderStatus.Delivering.code))
    {
        purchase.order.delivering = new Date().toISOString();
        var _status = orderStatus.Delivering;
        _status.text += '  '+purchase.deliveryStatus;
        /*
        ** Your Code Goes Here
        */
    }
}
/**
 * Record a delivery by shipper
 * @param {org.acme.Z2BTestNetwork.Deliver} purchase - the order to be processed
 * @transaction
 */
function Deliver(purchase) {
    if ((purchase.order.status = JSON.stringify(orderStatus.ShipRequest)) || (JSON.parse(purchase.order.status).code = orderStatus.Delivering.code))
    {
        /*
        ** Your Code Goes Here
        */
    }
}
 /**
 * Record a request for payment by the seller
 * @param {org.acme.Z2BTestNetwork.RequestPayment} purchase - the order to be processed
 * @transaction
 */
function RequestPayment(purchase) {
    if ((JSON.parse(purchase.order.status).text == orderStatus.Delivered.text) || (JSON.parse(purchase.order.status).text == orderStatus.Resolve.text))
        {purchase.order.status = JSON.stringify(orderStatus.PayRequest);
        purchase.order.financeCo = purchase.financeCo;
        /*
        ** Your Code Goes Here
        */
    }
}
 /**
 * Record a payment to the seller
 * @param {org.acme.Z2BTestNetwork.AuthorizePayment} purchase - the order to be processed
 * @transaction
 */
function AuthorizePayment(purchase) {
    if ((JSON.parse(purchase.order.status).text == orderStatus.PayRequest.text ) || (JSON.parse(purchase.order.status).text == orderStatus.Resolve.text ))
    {purchase.order.status = JSON.stringify(orderStatus.Authorize);
        /*
        ** Your Code Goes Here
        */
    }
}
 /**
 * Record a payment to the seller
 * @param {org.acme.Z2BTestNetwork.Pay} purchase - the order to be processed
 * @transaction
 */
function Pay(purchase) {
    if (JSON.parse(purchase.order.status).text == orderStatus.Authorize.text )
        {purchase.order.status = JSON.stringify(orderStatus.Paid);
        /*
        ** Your Code Goes Here
        */
    }
}
 /**
 * Record a dispute by the buyer
 * @param {org.acme.Z2BTestNetwork.Dispute} purchase - the order to be processed
 * @transaction
 */
function Dispute(purchase) {
    // Force Edit Papan
    if(true){
        purchase.order.status = JSON.stringify(orderStatus.Dispute);
        /*
        ** Your Code Goes Here
        */
    }
}
 /**
 * Resolve a seller initiated dispute
 * @param {org.acme.Z2BTestNetwork.Resolve} purchase - the order to be processed
 * @transaction
 */
function Resolve(purchase) {
        purchase.order.status = JSON.stringify(orderStatus.Resolve);
        /*
        ** Your Code Goes Here
        */
    }
    /**
 * Record a refund to the buyer
 * @param {org.acme.Z2BTestNetwork.Refund} purchase - the order to be processed
 * @transaction
 */
function Refund(purchase) {
        /*
        ** Your Code Goes Here
        */
    }
    /**
 * Record a backorder by the supplier
 * @param {org.acme.Z2BTestNetwork.BackOrder} purchase - the order to be processed
 * @transaction
 */
function BackOrder(purchase) {
        /*
        ** Your Code Goes Here
        */
    }

/**
 * display using console.log the properties of each property in the inbound object
 * @param {displayObjectProperties} _string - string name of object
 * @param {displayObjectProperties}  _object - the object to be parsed
 * @utility
 */
function displayObjectValues (_string, _object)
{
    for (var prop in _object){
        console.log(_string+'-->'+prop+':\t '+(((typeof(_object[prop]) === 'object') || (typeof(_object[prop]) === 'function'))  ? typeof(_object[prop]) : _object[prop]));
    }
}