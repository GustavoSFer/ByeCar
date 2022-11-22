<?php

class DadosModel {
  private $name;
  private $email;
  private $celular;

  public function __get($atributo) {
    return $this->$atributo;
  }
}

?>