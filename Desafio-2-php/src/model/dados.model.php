<?php

class DadosModel {
  private $name;
  private $email;
  private $celular;

  public function __get($atributo) {
    return $this->$atributo;
  }

  public function __set($atributo) {
    return $this->$atributo;
  }
}

?>