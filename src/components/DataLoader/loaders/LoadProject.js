import React, { useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import S from './LoadProject.module.scss'
import { deserializeProject } from '@rawgraphs/rawgraphs-core'
import charts from '../../../charts'


export default function LoadProject({ onProjectSelected, setLoadingError }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader()
      reader.addEventListener('load', (e) => {
        try {
          const project = deserializeProject(e.target.result, charts)
          setLoadingError(null)
          onProjectSelected(project)
        } catch (e) {
          setLoadingError(e.message)
        }
      })
      if (acceptedFiles.length) {
        reader.readAsText(acceptedFiles[0])
      }
    },
    [onProjectSelected, setLoadingError]
  )
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    onDrop,
    accept: '.rawgraphs',
    maxFiles: 1,
  })
  return (
    <div
      className={classNames(S.dropzone, {
        [S.reject]: isDragReject,
        [S.accept]: isDragAccept,
      })}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <span>ファイルをこちらにドラッグするか</span>
      <span>OSのダイアログを開いてファイルを</span>
      <Button className={S['browse-button']} color="primary">
        ブラウズ
      </Button>
      {isDragAccept && <p>すべてのファイルが受け付けられました</p>}
      {isDragReject && <p>いくつかのファイルは拒否されました</p>}
    </div>
  )
}
