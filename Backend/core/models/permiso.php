<?php

class Permiso extends Validator
{
    private $Id = null;
    private $Titulo = null;
    private $Descripcion = null;
    private $HoraInicio = null;
    private $HoraFinal = null;
    private $Fecha = null;
    
    public function setId($Id)
        {
            if($this->validateId($Id))
            {
                $this->Id = $Id;
                return true;
            }else{
                return false;
            }

        }

        public function getId()
        {
            return $this->Id;
        }

        public function setTitulo($Titulo)
        {
            if($this->validateAlphanumeric($Titulo, 1, 25)){
                $this->Titulo = $Titulo;
                return true;
            } else {
                return false;
            }
        }

        public function setDescripcion($Descripcion)
        {
            if($this->validateAlphanumeric($Descripcion, 1, 25)){
                $this->Descripcion = $Descripcion;
                return true;
            } else {
                return false;
            }
        }

        public function setHoraInicio($HoraInicio)
        {
            if($this->validateMoney($HoraInicio)){
                $this->HoraInicio = $HoraInicio;
                return true;
            } else {
                return false;
            }
        }

        public function setHoraFin($HoraFin)
        {
            if($this->validateMoney($HoraFin)){
                $this->HoraFin = $HoraFin;
                return true;
            } else {
                return false;
            }
        }

        public function setFecha($HoraFin)
        {
            if($this->validateAlphanumeric($HoraFin)){
                $this->HoraFin = $HoraFin;
                return true;
            } else {
                return false;
            }
        }


}