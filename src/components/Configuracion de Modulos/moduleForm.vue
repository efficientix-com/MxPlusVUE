<template>
  <div id="module-form">
    <div class="wrapper-stepper">
      <!-- Barra de progreso -->
      <div class="stepper">
        <div class="stepper-progress">
          <div
            class="stepper-progress-bar"
            :style="'width:' + stepperProgress"
          ></div>
        </div>
        <div
          class="stepper-item"
          :class="{ current: step == item, success: step > item }"
          v-for="item in 4"
          :key="item"
        >
          <div class="stepper-item-counter">
            <img
              class="icon-success"
              src="https://tstdrv2220309.app.netsuite.com/core/media/media.nl?id=42020&c=TSTDRV2220309&h=9G6kn8LO3RrsVXPtyTQ1zGdwHg7e22xBa-AZKIBVg3ePAJT-&_xt=.svg"
              alt="iconSucess"
            />
            <span class="number">
              {{ item }}
            </span>
          </div>
          <span class="stepper-item-title" v-if="item == 1"> Generales </span>
          <span class="stepper-item-title" v-if="item == 2"> Correo </span>
          <span class="stepper-item-title" v-if="item == 3">
            Ajusta artículos
          </span>
          <span class="stepper-item-title" v-if="item == 4"> Finaliza </span>
        </div>
      </div>
      <!-- Contenido del stepper -->
      <div class="stepper-content" v-for="item in 4" :key="item">
        <!-- Contenido PASO 1 -->
        <div class="stepper-pane" v-if="step == 1 && step == item">
          <div class="row">
            <div class="column">
              <div class="row">
                <label for="txtId">ID interno</label>
                <input type="text" name="txtId" />
              </div>
            </div>
            <div class="column">
              <div class="row">
                <label for="selectFolderTimbrado">Folder de timbrado</label>
                <select name="selectFolderTimbrado" id="selectFolderTimbrado">
                  <option value="idFolderTimbrado">Raiz: FacturasCFDI4</option>
                  <option value="idFolderTimbrado">Raiz: FacturasCFDI3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="row">
                <label for="txtVersionFacturacion"
                  >Versión de facturación</label
                >
                <select name="txtVersionFacturacion" id="txtVersionFacturacion">
                  <option :value="op.value" v-for="op in list" :key="op">
                    {{ op.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <label for="txtPropietarioTimbrado"
                  >Propietario timbrado automático</label
                >
                <select
                  name="txtPropietarioTimbrado"
                  id="txtPropietarioTimbrado"
                >
                  <option value="propietarioName">Propietario 1</option>
                  <option value="propietarioName">Propietario 2</option>
                  <option value="propietarioName">Propietario 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="fechaPagosCheck"
                  id="fechaPagosCheck"
                />
                <label for="fechaPagosCheck">Fecha actual timbrado pagos</label>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="fechaTimbrado"
                  id="fechaTimbrado"
                />
                <label for="fechaTimbrado">Fecha actual timbrado</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenido PASO 2 -->
        <div class="stepper-pane" v-if="step == 2 && step == item">
          <div class="email">
            <div class="column">
              <div class="row">
                <label for="txtAsuntoCorreo">Asunto de correo</label>
                <input
                  type="text"
                  name="txtAsuntoCorreo"
                  id="txtAsuntoCorreo"
                  class="asuntoEmail"
                />
              </div>
            </div>
          </div>
          <div class="email">
            <div class="column">
              <div class="row">
                <label for="txtCorreo">Cuerpo de correo</label>
                <textarea
                  name="txtCorreo"
                  id="txtCorreo"
                  class="txtAreaEmail"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="row">
                <label for="txtAutorCorreo">Autor de correo</label>
                <select name="txtAutorCorreo" id="txtAutorCorreo">
                  <option value="autor1">Marco Ramirez</option>
                  <option value="autor1">Marco Ramirez Version malvada</option>
                </select>
              </div>
            </div>
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="txtAutomatico"
                  id="txtAutomatico"
                />
                <label for="txtAutomatico">Envío de correo automático</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenido PASO 3 -->
        <div class="stepper-pane" v-if="step == 3 && step == item">
          Estas en el paso <span class="txt-green-1">{{ item }}</span> aquí
          mostrarás el contenido xfhsdkjfksfhksf
        </div>
      </div>
      <div class="controls">
        <div class="btn" v-on:click="step--" :disabled="step == 1">Anterior</div>
        <div class="btn btn--green-1" @click="step++" :disabled="step == 4">
          Siguiente
        </div>
      </div>
    </div>
  </div>
</template>

      
<script>
import axios from "axios";

export default {
  name: "ModuleForm",
  data() {
    return {
      step: 1,
      list: [],
    };
  },
  computed: {
    stepperProgress() {
      return (100 / 3) * (this.step - 1) + "%";
    },
  },
  created() {
    this.getList();
    // TestList es para pruebas de recepción e inserción de datos en pantalla
    // this.testList();
  },
  methods: {
    getList() {
      try {
        let self = this;
        console.debug("getList -self: ", self);

        let str = "";
        (str += "var https=null;"),
          (str += "var urlModule=null;"),
          (str += 'require(["N/url","N/https"], function(urlMode,https){'),
          (str += " var url=urlMode.resolveScript({"),
          (str += ' scriptId:"customscript_tkio_mxplus_testrequest_sl",'),
          (str += ' deploymentId:"customdeploy_tkio_mxplus_testrequest_sl",'),
          (str += "returnExternalUrl:false,"),
          // Se ponen los parámetros que va a leer NS y conforme a eso manda los datos
          (str += " params:{list:true}"),
          (str += "});"),
          (str += "self.getConfigAxios(url)"),
          (str += "});"),
          eval(str);
      } catch (err) {
        console.error(err);
      }
    },
    getConfigAxios(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization",
        },
        
      };
      axios
        .request(t)
        .then((b) => {
          console.log("RESP: ", b.data);
          this.list = b.data;
          console.log("LISTA: ", this.list);
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
    
    testList() {
      console.log("LISTA BEFORE: ", this.list);
      var obj = [
        { value: "001", name: "Adrián Aguilar" },
        { value: "002", name: "Richi López Ortiz" },
        { value: "003", name: "Diego Bernardo Jiménez Tabla" },
      ];
      this.list = obj;
      console.log("LISTA AFTER: ", this.list);
    },
    sendData() {
      try {
        let self = this;
        console.log("getList -self: ", self);

        let str = "";
        (str += "var https=null;"),
          (str += "var urlModule=null;"),
          (str += 'require(["N/url","N/https"], function(urlMode,https){'),
          (str += " var url=urlMode.resolveScript({"),
          (str += ' scriptId:"customscript_tkio_mxplus_testrequest_sl",'),
          (str += ' deploymentId:"customdeploy_tkio_mxplus_testrequest_sl",'),
          (str += "returnExternalUrl:false,"),
          (str += " params:{sendData:true}"),
          (str += "});"),
          
          (str += "https.post({"),
          (str += ' url:url,'),
          (str += ' headers:{},'),
          (str += "body:{bodyResp:'body del vue en post!'}"),
          (str += "});"),
          (str += "});"),
          eval(str);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/stepper.scss";
</style>
