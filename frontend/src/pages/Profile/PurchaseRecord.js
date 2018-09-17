import React from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../../redux/actions/userActions';
import ReactLoading from 'react-loading';
import moment from 'moment';

class PurchaseRecord extends React.Component {
  componentWillMount() {
    this.props.getPurchaseRecord();
  }

  render() {
    const { purchaseRecord } = this.props;
    console.log('purchaseRecord', purchaseRecord);
    if (purchaseRecord) {
      return (
        <div className="jumbotron jumbotron-fluid" style={{ margin: 0 }}>
          <div className="container">
            <h1 className="display-4">Purchase Record</h1>
            <br />
            {purchaseRecord.map((record, i) => (
              <div className="card" key={i}>
                <div className="card-header">
                  <div className="row">
                    <div className="col-12">
                      <h6>Invoice Number : {record.payment_id}</h6>
                    </div>
                    {/* <div className="col-md-6">
                      <h6>Date : {moment(record.created_at).format('llll')}</h6>
                    </div> */}
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <strong>{record.package_type} Pack</strong>
                    </div>
                    <div
                      className="col-6"
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <strong>
                        HK$
                        {record.amount / 100}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-muted">
                  {moment(record.created_at).format('llll')} (
                  {moment(record.created_at).fromNow()})
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="loading"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ReactLoading type="spin" color="#black" height={100} width={100} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    purchaseRecord: state.user.purchaseRecord
  };
}

export default connect(
  mapStateToProps,
  UserActions
)(PurchaseRecord);
