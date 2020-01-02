import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import VerticalStepper from "./pages/VerticalStepper";


/**
 * Custom Element class has been defined
 */
const useCustomStyles = makeStyles({
  root: {
    color: '#fff',
    fontSize: 11,
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f3f4f9',
    position: 'relative',
    borderRadius: 6,
    display: 'table',
    margin: '24px 0px 0px 10px'

  },
  parent: {
    borderLeft: '1px solid #784af4',
    marginLeft: -12,
    marginTop: -17
  },
  title: {
    margin: 0,
    color: '#4d48ba',
    fontSize: 13
  },
  subContent: {
    margin: 0,
    color: '#777d89',
    fontSize: 13
  },
  price: {
    marginTop: 5,
    color: '#585e6d',
    fontSize: 17,
    fontWeight: 300
  }
});

/**
 * Used to render the Custom Element
 * @param {*} invoiceNumber
 * @param {*} price
 * @param {*} transactionId 
 */
const CustomElement = ({
  invoiceNumber,
  price,
  transactionId
}) => {
  const customClasses = useCustomStyles();
  return (
    <div className={customClasses.parent}>
      <div className={customClasses.root}>
        <p className={customClasses.title}>Invoice Payment</p>
        <p className={customClasses.subContent}>{invoiceNumber}</p>
        <span className={customClasses.price}>{price}</span>
        <p className={customClasses.subContent}>{`Transaction ID: ${transactionId}`}</p>
      </div>
    </div>
  )
}

/**
 * Step Values
 */
const verticalSteps = [{
  status: 'IDLE',
  title: '26-May-2019',
  annotation: null
}, {
  status: 'PENDING',
  title: '12:24 PM',
  invoiceNumber: 'MyT100 - 467890',
  transactionId: '1234567890',
  price: 'MUR 19.00',
  annotation: CustomElement
}, {
  status: 'FAILED',
  title: '11:24 AM',
  invoiceNumber: 'MyT100 - 467890',
  transactionId: '1234567890',
  price: 'MUR 19.00',
  annotation: CustomElement
}, {
  status: 'IDLE',
  title: '27-May-2019',
  annotation: null
}, {
  status: 'SUCCESS',
  title: '12:24 PM',
  invoiceNumber: 'MyT100 - 467890',
  transactionId: '1234567890',
  price: 'MUR 19.00',
  annotation: CustomElement
}]

/**
 * APP Component
 */
const App = () => {
  return <VerticalStepper steps={verticalSteps} activeStep={verticalSteps.length}/>
}

export default App;
