import React, { useMemo, memo, useState, useCallback } from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt  } from "react-icons/fa";

interface DetailsDrawerProps {
    allAnimationsComplete: boolean;
}

const date = {
    wednesday: new Date(2025, 6, 23),
    thursday: new Date(2025, 6, 24),
    both: [new Date(2025, 6, 23), new Date(2025, 6, 24)],
};

const DetailsDrawer: React.FC<DetailsDrawerProps> = memo(({ allAnimationsComplete }) => {
    const [isCalendarDropdownVisible, setCalendarDropdownVisible] = useState(false);
    const [isMapModalVisible, setMapModalVisible] = useState(false);

    const toggleCalendarDropdown = useCallback(() => {
        setCalendarDropdownVisible(prev => !prev);
    }, []);

    const openMapModal = useCallback(() => {
        setMapModalVisible(true);
    }, []);

    const closeMapModal = useCallback(() => {
        setMapModalVisible(false);
    }, []);

    const faCalendarAltStyle = useMemo(() => ({
        fontSize: "12px",
        color: "#007bff"
    }), []);

    const faMapMarkerAltStyle = useMemo(() => ({
        marginRight: "5px",
        fontSize: "12px",
        color: "#007bff"
    }), []);

    const motionDivStyle = useMemo(() => ({
        position: "fixed",
        top: 0,
        right: 0,
        width: "300px",
        height: "100%",
        backgroundColor: "#fff",
        zIndex: 10,
        borderLeft: "1px solid #ccc",
    }), []);

    const innerDivStyle = useMemo(() => ({
        padding: "20px",
        color: "black",
        textAlign: "center"
    }), []);

    const hrStyle = useMemo(() => ({
        border: "none",
        borderTop: "1px solid #ccc",
        margin: "10px 0"
    }), []);

    const pStyle = useMemo(() => ({
        fontWeight: 300,
        lineHeight: date.both ? 1.3 : 0.3
    }), []);

    const buttonStyle = useMemo(() => ({
        border: "none",
        background: "none",
        color: "#007bff",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        fontSize: "12px",
    }), []);

    const calendarDropdownStyle = useMemo(() => ({
        display: isCalendarDropdownVisible ? "block" : "none",
        position: "absolute",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        borderRadius: "4px",
        zIndex: 1,
        whiteSpace: "nowrap",
    }), [isCalendarDropdownVisible]);

    const mapModalStyle = useMemo(() => ({
        display: isMapModalVisible ? "block" : "none",
        position: "fixed",
        zIndex: 20,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(5px)",
        transition: "opacity 0.5s",
        opacity: isMapModalVisible ? 1 : 0,
    }), [isMapModalVisible]);

    const faCalendarAlt = useMemo(() => (
        <FaCalendarAlt style={faCalendarAltStyle} />
    ), [faCalendarAltStyle]);

    const faMapMarkerAlt = useMemo(() => (
        <FaMapMarkerAlt style={faMapMarkerAltStyle} />
    ), [faMapMarkerAltStyle]);

    const memoizedContent = useMemo(() => (
        <motion.div
            style={motionDivStyle as React.CSSProperties}
            initial={{ x: "100%" }}
            animate={{ x: allAnimationsComplete ? "0%" : "100%" }}
            transition={{ duration: 1 }}
        >
            <div style={innerDivStyle as React.CSSProperties}>
                <h2>Details</h2>
                <hr style={hrStyle} />
                <h3>Location</h3>
                <p style={pStyle}>
                    Maryland, United States <br />
                    {Array.isArray(date.both) 
                        ? date.both.map(d => d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })).join(', ') 
                        : date.wednesday.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faCalendarAlt}
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <button
                            style={buttonStyle}
                            onClick={toggleCalendarDropdown}
                        >
                            Add To Calendar
                        </button>
                        <div
                            id="calendarDropdown"
                            style={calendarDropdownStyle as React.CSSProperties}
                        >
                            <button
                                style={{
                                    color: "black",
                                    padding: "12px 16px",
                                    textDecoration: "none",
                                    display: "block",
                                    background: "none",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    whiteSpace: "nowrap",
                                }}
                                onClick={() => {
                                    const event = {
                                        title: "Oluwaseyi's and Oluwademilade's Wedding",
                                        start: date.both ? date.both[0] : date.wednesday,
                                        end: date.both ? date.both[1] : date.thursday,
                                        description: "",
                                        location: "Maryland, United States",
                                    };
                                    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.toISOString().replace(/-|:|\.\d+/g, "")}/${event.end.toISOString().replace(/-|:|\.\d+/g, "")}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
                                    window.open(calendarUrl, "_blank");
                                }}
                            >
                                Google Calendar
                            </button>
                            <button
                                style={{
                                    color: "black",
                                    padding: "12px 16px",
                                    textDecoration: "none",
                                    display: "block",
                                    background: "none",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    whiteSpace: "nowrap",
                                }}
                                onClick={() => {
                                    const event = {
                                        title: "Oluwaseyi's and Oluwademilade's Wedding",
                                        start: date.both ? date.both[0] : date.wednesday,
                                        end: date.both ? date.both[1] : date.thursday,
                                        description: "",
                                        location: "Maryland, United States",
                                    };
                                    const calendarData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${encodeURIComponent(event.title)}\nDTSTART:${event.start.toISOString().replace(/-|:|\.\d+/g, "")}\nDTEND:${event.end.toISOString().replace(/-|:|\.\d+/g, "")}\nDESCRIPTION:${encodeURIComponent(event.description)}\nLOCATION:${encodeURIComponent(event.location)}\nEND:VEVENT\nEND:VCALENDAR`;
                                    const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8' });
                                    const link = document.createElement('a');
                                    link.href = URL.createObjectURL(blob);
                                    link.download = 'calendar.ics';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                            >
                                iCal
                            </button>
                            <button
                                style={{
                                    color: "black",
                                    padding: "12px 16px",
                                    textDecoration: "none",
                                    display: "block",
                                    background: "none",
                                    border: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    whiteSpace: "nowrap",
                                }}
                                onClick={() => {
                                    const event = {
                                        title: "Oluwaseyi's and Oluwademilade's Wedding",
                                        start: date.both ? date.both[0] : date.wednesday,
                                        end: date.both ? date.both[1] : date.thursday,
                                        description: "",
                                        location: "Maryland, United States",
                                    };
                                    const calendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(event.title)}&startdt=${event.start.toISOString()}&enddt=${event.end.toISOString()}&body=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
                                    window.open(calendarUrl, "_blank");
                                }}
                            >
                                Outlook
                            </button>
                        </div>
                    </div>
                    <div
                        id="mapModal"
                        style={mapModalStyle as React.CSSProperties}
                    >
                        <div
                            style={{
                                backgroundColor: "#fefefe",
                                margin: "15% auto",
                                padding: "20px",
                                border: "1px solid #888",
                                width: "30%",
                            }}
                        >
                            <button
                                style={{
                                    color: "#aaa",
                                    float: "right",
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    background: "none",
                                    border: "none",
                                }}
                                onClick={closeMapModal}
                            >
                                &times;
                            </button>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.837255049878!2d-76.8836266846818!3d38.97844597955761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e3b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sMaryland!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus&z=7"
                                title="Map"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <button
                        style={buttonStyle}
                        onClick={openMapModal}
                    >
                        {faMapMarkerAlt} <span style={{ color: "#007bff" }}>View Map</span>
                    </button>
                </span>
                <h3>Leave Us A Message:</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

                        const mailtoLink = `mailto:demidaniel98@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AContact Email: ${encodeURIComponent(email)}`;
                        window.location.href = mailtoLink;
                    }}
                >
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px #ccc solid", borderRadius: "8px", backgroundColor: "white" }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px #ccc solid", borderRadius: "8px", backgroundColor: "white" }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "1px #ccc solid", borderRadius: "8px", backgroundColor: "white", resize: "vertical" }}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 20px",
                            border: "none",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </motion.div>
    ), [
        allAnimationsComplete,
        motionDivStyle,
        innerDivStyle,
        hrStyle,
        pStyle,
        faCalendarAlt,
        buttonStyle,
        calendarDropdownStyle,
        faMapMarkerAlt,
        mapModalStyle,
        toggleCalendarDropdown,
        openMapModal,
        closeMapModal
    ]);

    return memoizedContent;
});

export default DetailsDrawer;