import React from "react";
import Column from "../Column";

const BoardContent = () => {
    return (
        <div className="flex overflow-x-auto m=[0_10px_10px] " >
        <Column />
        <Column />
      </div>
    )
}

export default BoardContent