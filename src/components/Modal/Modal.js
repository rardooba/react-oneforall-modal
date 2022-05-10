import React from 'react';
import PropTypes from 'prop-types';
import "../../styles.css"
export const Modal = ({ onClose, children, isOpen, bgColor= "#0a8128" }) => {
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

Modal.PropTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  bgColor: PropTypes.string,

}

Modal.defaultProps = {
  bgColor: '#0a8128'
};