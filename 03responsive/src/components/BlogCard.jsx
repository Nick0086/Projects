import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaUser, FaComment } from "react-icons/fa";

function BlogCard({title,content,imageposition,img}) {
    return (
        <div className='bg-lights'>
            <Row className='flex-column flex-lg-row'>

                <Col className="" xs={{ order: 0 }} lg={imageposition === "left" ? { order: 0 } : { order: 1 }} >
                    <div className='blog-img overflow-hidden w-100'>
                        <img src={img} className='w-100 object-fit-cover h-100' alt="" />
                    </div>
                </Col>

                <Col className='' xs={{ order: 1 }} lg={imageposition === "left" ? { order: 1 } : { order: 0 }} >
                    <div className='blog-info '>
                        <p className='blog-heding '>
                            <span><FaUser className='icon-blog' />admin</span>
                            <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                            <span><FaComment className='icon-blog' />3 COMMENTS</span>
                        </p>
                        <h4><a href="#">{title}</a></h4>
                        <p  >{content}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BlogCard