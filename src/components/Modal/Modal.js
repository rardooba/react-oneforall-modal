import React, { useCallback, useEffect } from 'react';
import "../../styles.css"
export const Modal = ({ onClose, children, isOpen, bgColor= "#0a8128" }) => {

  const handleKeyDown = useCallback((e) => {
    e.key === 'Escape' && onClose()
   }, [onClose])
 
   useEffect(() => {
     document.addEventListener('keydown', handleKeyDown)
 
     return () => {
       document.removeEventListener('keydown', handleKeyDown)
     }
   }, [handleKeyDown])

    return (
      <>
        {isOpen && (
          <div className="modal__global-container">
            <div className="modal__overlay" data-testid="overlay" onClick={onClose}>
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