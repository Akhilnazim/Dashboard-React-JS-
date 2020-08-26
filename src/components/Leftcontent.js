import React from 'react'
import {Progress,Divider} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import "./Leftcontent.css"

function Leftcontent() {
    return (
        <div className ="CCL">
            <div className = "CCL-item head">
                <h4 className = "CCL-left">Latest Result</h4>
                <div className = "CCL-right">
                    <h4 >More  <FontAwesomeIcon icon={faLongArrowAltRight}/></h4>
                </div>
            </div>
            <div className = "CCL-item">
                <h5 className = "CCL-left">Unit 5 - <span>Technology</span></h5>
                <Progress percent={25} strokeColor="red" className = "CCL-right"/>
            </div>
            <Divider className="divider" />
            <div className = "CCL-item">
                <h5 className = "CCL-left">Unit 12 - <span>Ecology</span></h5>
                <Progress percent={44} className = "CCL-right"/>
            </div>
            <Divider className="divider" />
            <div className = "CCL-item">
                <h5 className = "CCL-left">Unit 9 - <span>Real estate</span></h5>
                <Progress percent={40} className = "CCL-right"/>
            </div>
            <Divider className="divider" />
            <div className = "CCL-item">
                <h5 className = "CCL-left">Unit 8 - <span>Education</span></h5>
                <Progress percent={15} strokeColor="red" className = "CCL-right"/>
            </div>
            <Divider className="divider" />
            <div className = "CCL-item">
                <h5 className = "CCL-left">Unit 16 - <span>Job market</span></h5>
                <Progress percent={76} className = "CCL-right"/>
            </div>
        </div>
    )
}

export default Leftcontent;