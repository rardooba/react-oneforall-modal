import React from 'react';
import "../../styles.css"
export const Modal = ({ onClose, children, isOpen, bgColor }) => {
    return (
      <>
        {isOpen && (
          <div className="modal__global-container">
            <div className="modal__overlay" onClick={onClose}>
              <div className="modal__container" style={{backgroundColor: bgColor}} onClick={(e) => e.stopPropagation()}>
                <button className="modal__button" onClick={onClose}>&#x2715;</button>
                {children}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };