import React from 'react'
import './function.js'
import jQuery from 'jquery'

// 结尾组件
export default class myActiveCell extends React.Component {
    constructor(props) {
        super(props)   
    }
    bindActive = () => {
        console.log('+++++++++++')
        jQuery("#cardArea").cardArea()
    }
    componentDidMount() {
        this.bindActive()
    }
    render() {
        return (
            <ul id="cardArea" className="card-area clearfix">
                <li className="card-item active">
                    <div className="card">
                        <div className="card-title title-even">
                            <div className="content">
                                <div className="zq-product-img">
                                    <i className="zq-icon icon40x40 crad-area-icon1"></i>
                                </div>
                                <h1>网站与门户</h1>
                                <p className="short-info">连接内外 覆盖多端</p>
                            </div>
                        </div>
                        <div className="card-content content-first bg-e8e8e8">
                            <ul className="content-first-list">
                                <li>全网门户</li>
                                <li>企业域名</li>
                            </ul>
                        </div>
                        <div className="card-content content-second">
                            <div className="main-info">
                                <a href="#" className="no-effect">
                                    <p className="main-head">全网门户</p>
                                </a>
                                <p className="main-tip">全网企业客户触达、获取商机、达成业务</p>
                                <p className="main-desc">使用企业门户进行客户信息管理、销售线索管理，让您随时随地更轻松地获取新的潜在客户，更快捷地完成业务。</p>
                                <a href="#">
                                    <button className="main-btn">了解详情</button>
                                </a>
                            </div>
                            <ul className="other-info clearfix">
                                <li className="other-info-list">
                                    <a href="#" className="no-effect">
                                        <h3 className="other-head">企业域名</h3>
                                        <p className="other-desc">注域名，享安全服务</p>
                                    </a>
                                    <i className="zq-icon icon17x17 c-a-arrow"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="card-item">
                    <div className="card">
                        <div className="card-title title-even">
                            <div className="content">
                                <div className="zq-product-img">
                                    <i className="zq-icon icon40x40 crad-area-icon2"></i>
                                </div>
                                <h1>营销与推广</h1>
                                <p className="short-info">全景覆盖 经济之选</p>
                            </div>
                        </div>
                        <div className="card-content content-first bg-e1e1e1">
                            <ul className="content-first-list">
                                <li>营销宝</li>
                                <li>大把推</li>
                                <li>易米通</li>
                                <li>Google Adwords</li>
                            </ul>
                        </div>
                        <div className="card-content content-second">
                            <div className="main-info">
                                <a href="#" className="no-effect">
                                    <p className="main-head">营销宝</p>
                                </a>
                                <p className="main-tip">多场景营销智能工具集</p>
                                <p className="main-desc">使用中企营销宝进行营销，不论是活动组织、营销推广，还是企业宣传、产品售卖、热点跟踪，让您随时随地便捷的开展营销，提升品牌形象与影响力。</p>
                                <a href="#">
                                    <button className="main-btn">了解详情</button>
                                </a>
                            </div>
                            <ul className="other-info clearfix">
                                <li className="other-info-list">
                                    <a href="#" className="no-effect">
                                        <h3 className="other-head">大把推</h3>
                                        <p className="other-desc">让更多客户找到你</p>
                                    </a>
                                    <i className="zq-icon icon17x17 c-a-arrow"></i>
                                </li>
                                <li className="other-info-list">
                                    <a href="#" className="no-effect">
                                        <h3 className="other-head">易米通</h3>
                                        <p className="other-desc">国内创新的数字营销平台</p>
                                    </a>
                                    <i className="zq-icon icon17x17 c-a-arrow"></i>
                                </li>
                                <li className="other-info-list">
                                    <a href="#" className="no-effect">
                                        <h3 className="other-head">Google Adwords</h3>
                                        <p className="other-desc">助力您的海外拓金之路</p>
                                    </a>
                                    <i className="zq-icon icon17x17 c-a-arrow"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="card-item">
                    <div className="card">
                        <div className="card-title title-even">
                            <div className="content">
                                <div className="zq-product-img">
                                    <i className="zq-icon icon40x40 crad-area-icon3"></i>
                                </div>
                                <h1>电商与业务</h1>
                                <p className="short-info">在线业务 轻松实现</p>
                            </div>
                        </div>
                        <div className="card-content content-first bg-e8e8e8">
                            <ul className="content-first-list">
                                <li>ZshopS</li>
                            </ul>
                        </div>
                        <div className="card-content content-second">
                            <div className="main-info">
                                <a href="#" className="no-effect">
                                    <p className="main-head">ZshopS</p>
                                </a>
                                <p className="main-tip">为中小企业搭建独立电商平台，提供行业电商解决方案。</p>
                                <p className="main-desc">商城提供安全稳定、易用高效的在线零售管理系统，后台简单易用，购物体验流畅，促销方式灵活，数据统计分析嵌入业务各个环节，根据访问记录深入分析，随时随地呈现统计结果指导决策。帮助传统企业顺利开展线上零售业务，强化数字分析与营销推广，降低业务成本，树立企业品牌，扩大企业收益渠道。</p>
                                <a href="#">
                                    <button className="main-btn">了解详情</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card-item">
                    <div className="card">
                        <div className="card-title title-even">
                            <div className="content">
                                <div className="zq-product-img">
                                    <i className="zq-icon icon40x40 crad-area-icon4"></i>
                                </div>
                                <h1>协同与管理</h1>
                                <p className="short-info">连接互通 简便开放</p>
                            </div>
                        </div>
                        <div className="card-content content-first bg-e1e1e1">
                            <ul className="content-first-list">
                                <li>Z云邮</li>
                                <li>有翼云销</li>
                            </ul>
                        </div>
                        <div className="card-content content-second">
                            <div className="main-info">
                                <a href="#" className="no-effect">
                                    <p className="main-head">Z云邮</p>
                                </a>
                                <p className="main-tip">专注企业办公效率的提升，云“游”四海的企业邮箱</p>
                                <p className="main-desc">帮企业提高工作效率的企业邮箱：支持微信收发信件、超大企业共享网盘，多维度的邮箱管理功能等。并且，在海外部署了多达34个收发节点，国内部署节点28个，让企业的重要邮件，全球畅“游”。</p>
                                <a href="#">
                                    <button className="main-btn mr20">了解详情</button>
                                </a>
                                <a href="#">
                                    <button className="main-white-btn">立即试用</button>
                                </a>
                            </div>
                            <ul className="other-info clearfix">
                                <li className="other-info-list">
                                    <a href="#" className="no-effect">
                                        <h3 className="other-head">有翼云销</h3>
                                        <p className="other-desc">有效提升销售业绩和转化率</p>
                                    </a>
                                    <i className="zq-icon icon17x17 c-a-arrow"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }       
}