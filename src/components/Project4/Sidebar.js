import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`title-proj4 ${
                    note.id === props.currentNote.id ? "selected-note-proj4" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet-proj4">{note.body.split("\n")[0]}</h4>
                <button 
                    className="delete-btn-proj4 button-proj4"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash-proj4 trash-icon-proj4"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane-proj4 sidebar-proj4">
            <div className="sidebar--header-proj4">
                <h3>Notes</h3>
                <button className="new-note-proj4 button-proj4" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
