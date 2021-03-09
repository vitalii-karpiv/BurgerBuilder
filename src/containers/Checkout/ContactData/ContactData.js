import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../../components/UI/ErrorMessage/ErrorMessage';
import Input from '../../../components/UI/Input/Input';

import * as actions from '../../../store/actions/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'name',
                    placeholder: 'Your Name'
                },
                value: '',
                isValid: false,
                isTouched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'street',
                    placeholder: 'Your Street'
                },
                value: '',
                isValid: false,
                isTouched: false
            },
            numberOfFlat: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'numberOfFlat',
                    placeholder: 'Your Flat'
                },
                value: '',
                isValid: false,
                isTouched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    name: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                isValid: false,
                isTouched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }
                ],
                value: 'fastest',
                isValid: true,
                isTouched: false
            }
        },
        formIsValid: false,
        error: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        const contactData = {}
        for (let formId in this.state.orderForm) {
            contactData[formId] = this.state.orderForm[formId].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            contactData
        }

        this.props.onOrderBurger(order);
    }

    checkFormValidity = () => {
        let formValidity = true;
        for (let i in this.state.orderForm) {
            formValidity = this.state.orderForm[i].isValid && formValidity;
        }
        this.setState({ formIsValid: formValidity })
    }

    inputChangeHandler = (event, formId) => {
        const newOrderForm = { ...this.state.orderForm };
        const newFormElement = { ...newOrderForm[formId] };
        newFormElement.value = event.target.value.trim();
        newFormElement.isTouched = true;
        if (event.target.name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(event.target.value).toLowerCase())) {
                newFormElement.isValid = true;
            } else {
                newFormElement.isValid = false;
            }
        } else {
            if (event.target.value.trim().length) {
                newFormElement.isValid = true;
            } else {
                newFormElement.isValid = false;
            }
        }

        newOrderForm[formId] = newFormElement;
        this.setState({ orderForm: newOrderForm })
        this.checkFormValidity();
    }

    render() {
        const formElementsArr = [];
        for (let i in this.state.orderForm) {
            formElementsArr.push({
                id: i,
                config: this.state.orderForm[i]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArr.map(elem => (
                    <Input
                        isTouched={elem.config.isTouched}
                        isValid={elem.config.isValid}
                        key={elem.id}
                        elementType={elem.config.elementType}
                        config={elem.config.elementConfig}
                        value={elem.config.value}
                        changed={(event) => this.inputChangeHandler(event, elem.id)} />
                ))}
                <Button disabled={!this.state.formIsValid} color='Success'>Submit</Button>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />
        }
        if (this.state.error) {
            form = <ErrorMessage />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: orderData => dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);