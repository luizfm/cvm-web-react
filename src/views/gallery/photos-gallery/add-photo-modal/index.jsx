import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Modal from '../../../../components/modal'
import Spinner from '../../../../components/spinner'
import { ReactComponent as AddIcon } from '../../../../assets/icons/plus-icon.svg'

import styles from './styles.module.scss'
import Button from '../../../../components/button'

const AddPhotoModal = ({ onClose }) => {
  const [photosPreview, setPhotoPreview] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onAddPhoto = useCallback(event => {
    setIsLoading(true)
    setPhotoPreview(URL.createObjectURL(event.target.files[0]))
    setIsLoading(false)
  }, [])

  const onSaveClick = useCallback(() => {
    //TODO, Integrate when BE is ready
    onClose()
  }, [onClose])

  return (
    <Modal title="Adicione novas fotos" id="add-photo-modal" onClose={onClose}>
      <div className={styles['add-photo-container']}>
        {photosPreview.length > 0 ? (
          <img src={photosPreview} alt="A preview" className={styles['photo-preview']}/>
        ) : (
          <>
            <input type="file" id="photo-input" className={styles['file-input']} onChange={onAddPhoto}/>
            <label htmlFor="photo-input" className={styles['add-photo']}>
              {isLoading ? (
                <Spinner color="black" />
              ) : (
                <>
                  <AddIcon />
                  <span>Nova foto</span>
                </>
              )}
            </label>
          </>
        )}

        <div className={styles['buttons-container']}>
          <Button onClick={onClose} className={styles['cancel-button']}>Cancelar</Button>
          <Button onClick={onSaveClick} className={styles['save-button']}>Salvar</Button>
        </div>
      </div>
    </Modal>
  )
}

AddPhotoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default AddPhotoModal
