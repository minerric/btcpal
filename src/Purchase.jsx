import React from 'react';
import PropTypes from 'prop-types';
import ContactBtn from "./ContactBtn";
import btc from './btc.svg';


function Purchase({item = 'personal'}) {


    return (

        <form method="POST" action="https://btcpal.online/apps/2bEJNgr2GZNwWbNDk35iXRofifik/pos">
            {/*<input type="email" className={'form-control'} name="email"/>*/}
            {/*<input type="hidden" name="orderId" value="CustomOrderId"/>*/}
            <input type="hidden" name="notificationUrl" value={`https://register.btcpal.online/api/purchases/${item}`}/>
            <input type="hidden" name="redirectUrl" value={`https://register.btcpal.online/api/purchases/redirect/${item}`}/>
            <ContactBtn klass={'card-link mr-2'}/>

            <button type="submit"
                    className={'btn btn-outline-warning p-2'}
                    name="choiceKey"
                    value={item}
            >
                <span className={'px-2'}>
                    Buy with
                </span>
                <img src={btc} alt={'btc'} height={20} width={20}/>
            </button>
        </form>
    );
}

Purchase.propTypes = {};
Purchase.defaultProps = {};

export default Purchase;
