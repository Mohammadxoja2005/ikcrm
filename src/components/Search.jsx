import React from 'react'
// icons
import flagUzb from '../images/1200px-Flag_of_Uzbekistan.png'
import britianFlag from '../images/GB.png'
import notificationIcon from '../images/notification.png'
import uzbRegion from '../images/region.png'
import ruRegion from '../images/RU.png'

function Search() {
    return (
        <div className="d-flex ajaxCliDiv">
            <div className="inputDiv">
                <div className="affflo">
                    <ion-icon className="searchIconInput" name="search-outline" />
                </div>
                <div
                    className="inputCustomDiv"
                    style={{ width: "100%", marginTop: "-16px" }}
                >
                    <input className="searchInput" type="text" />
                </div>
            </div>
            <div style={{ maxWidth: 169, display: "flex", marginRight: 80 }}>
                <div className="dropdown">
                    <button
                        className="d-flex buttonUzbDropDownHeader dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            className="notifRegion"
                            src={notificationIcon}
                            alt="Notification"
                        />
                    </button>
                    <div
                        className="dropdown-menu"
                        style={{ border: "none", backgroundColor: "transparent" }}
                        aria-labelledby="dropdownMenuButton2"
                    >
                        <div className="up-arrow2" />
                        <div className="dropdownMenyApplyNotification">
                            <h4 className="netNovixUvidomleniy">Нет новых уведомлений</h4>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <button
                        className="buttonUzbDropDownHeader dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            className="notifRegion2"
                            src={flagUzb}
                            alt="region"
                        />
                    </button>
                    <div
                        className="dropdown-menu"
                        style={{ border: "none", backgroundColor: "transparent" }}
                        aria-labelledby="dropdownMenuButton"
                    >
                        <div className="up-arrow" />
                        <div className="dropdownMenyApplyUzbFlag">
                            <a className="dropdown-item dropdownLanguageItem" href="#">
                                <img
                                    className="dropdownRegionBayroq"
                                    style={{ marginRight: 8 }}
                                    src={uzbRegion}
                                    alt="region"
                                />
                                O'zbekcha
                            </a>
                            <a className="dropdown-item dropdownLanguageItem" href="#">
                                <img
                                    className="dropdownRegionBayroq"
                                    style={{ marginRight: 8 }}
                                    src={ruRegion}
                                    alt="region"
                                />
                                Русский
                            </a>
                            <a className="dropdown-item dropdownLanguageItem" href="#">
                                <img
                                    className="dropdownRegionBayroq"
                                    style={{ marginRight: 8 }}
                                    src={britianFlag}
                                    alt="region"
                                />
                                English
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search