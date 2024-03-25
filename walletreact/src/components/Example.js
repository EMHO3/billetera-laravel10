import React, { Component } from 'react';
import { TransferForm } from './TransferForm';
import { TransferList } from './TransferList';

const url='http://127.0.0.1:8000'
class Example extends Component  {
    constructor(props){
        super(props)
        this.state={
            money:0.0,
            transfers:[],
            error:null,
            form:{
                descripcion:'',
                monto:'',
                wallet_id:1
            }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    async handleSubmit(e){
        e.preventDefault()
        try {
            let config={
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state.form)
            }
            console.log('url', url)
            console.log('config', config)
            let res=await fetch(`${url}/api/transfer`,config)
            let data = await res.json()
            console.log('data', data)

            this.setState({
                transfers:this.state.transfers.concat(data),
                money:this.state.money+(parseInt(data.monto))
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    handleChange(e){
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    async componentDidMount(){
        try {
            let res=await fetch(`${url}/api/wallet`)
            let data = await res.json()
            this.setState({
                money:data.money,
                transfers:data.transfers
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }
  
  render(){
    return (
        <div className='bg-slate-100'>
            <div className="row justify-content-center">
                <div className="col-md-12 m-t-md">
                    <h1 className='text-8xl'> $ {this.state.money}</h1>
                </div>
                <div className='col-md-12'>
                    <TransferForm
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
                        
                </div>    
            </div>
                <div className='m-t-md'>
                <TransferList
                transfers={this.state.transfers}/>  
            </div>
        </div>
    );}  
};

export default Example;




