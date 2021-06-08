import React from 'react'
class AddCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            list: [],
            customerName: '',
            billAmount: '',
            serviceRating: 0.2,
            customerCount: 0,
            totalTipAmount: 0

        }
    }

    handleBillAmount = (event) => {
        this.setState({ billAmount: event.target.value })
    }

    handleServiceRating = (event) => {
        this.setState({ serviceRating: event.target.value })
    }

    handleCustomerName = (event) => {
        this.setState({ customerName: event.target.value })
    }

    handleClickAddCustomer = () => {
        if (this.state.customerName !== '') {
            this.setState({
                list: [...this.state.list,
                {
                    tempName: this.state.customerName,
                    tempBill: this.state.billAmount,
                    tempRating: this.state.serviceRating
                }],
                customerName: '',
                // billAmount: '',
                serviceRating: 0.2
            })
        }
    }

    totalTip = () => {
        this.setState({
            customerCount: this.state.list.length,
            totalTipAmount: this.state.list.map((item) => { return parseInt(item.tempBill) * item.tempRating }).reduce((sum, value) => { return sum + value }, 0)

        })

    }


    render() {
        return (
            
            <div>
                {/* Bill Amount, Service rating and Add Customer */}
                <div style={{ textAlign: "center", border: "solid #00ff41 2px", marginTop: "10px" }}>
                    <br />
                    <label>Enter your bill amount</label> <br /> <br /> <br />
                    <input value={this.state.billAmount} onChange={this.handleBillAmount} style={{ width: "90%" }} type="text" />
                    <br /> <br /> <br />
                    <hr />
                    <br /> <br />
                    <label>How was the service &nbsp;</label>
                    <select value={this.state.serviceRating} onChange={this.handleServiceRating}>
                        <option value="0.2" >Excellent - 20%</option>
                        <option value="0.1" >Moderate - 10%</option>
                        <option value="0.05" >Bad - 5%</option>
                    </select> &nbsp;
                <input type="text" placeholder="Customer Name" value={this.state.customerName} onChange={this.handleCustomerName} /> &nbsp;
                <button onClick={this.handleClickAddCustomer}>Add Customer</button>
                    <br /> <br /> <br />

                </div>

                {/* Display Customer List  */}
                <div style={{ border: "solid hotpink 2px", marginTop: "10px" }}>
                    <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0px" }}>Customer List</h4>
                    <hr />

                    <ul>
                        {this.state.list.map((item, index) => <li key={index}>{item.tempName} offering a tip of {parseInt(item.tempBill) * item.tempRating} rupee</li>)}
                    </ul>


                </div>



                {/*  Calculate total number of customers and total tip amount */}

                <div style={{ border: "solid hotpink 2px", marginTop: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", marginTop: "10px" }}>
                        <button id="buttonTip" onClick={this.totalTip}>Calculate Tip & Customer</button>
                    </div>
                    <br />
                    <div>
                        <table style={{ width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Total Customers</th>
                                    <th>Tip</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.customerCount}</td>
                                    <td>{this.state.totalTipAmount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCustomer