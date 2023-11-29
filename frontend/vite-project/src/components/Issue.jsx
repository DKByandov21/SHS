
import React, {Component} from "react";
import forms from "../data/forms.json"

class Issue extends Component {
    render(){
        return (
            <>
                <div className="blogs">
                        {
                            forms && forms.map(record => {
                                return (
                                    <>
                                    <div className="issue">
                                        <h3>{record.password}</h3>
                                        <p>{record.email}</p>
                                    </div>
                                    </>
                                );
                            })
                        }

              </div>
            </>

        );
    };
};

export default Issue;