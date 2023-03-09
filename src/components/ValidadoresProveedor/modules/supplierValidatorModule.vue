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
          v-for="item in 5"
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
          <span class="stepper-item-title" v-if="item == 2"> Correos </span>
          <span class="stepper-item-title" v-if="item == 3">
            Correos de error
          </span>
          <span class="stepper-item-title" v-if="item == 4">
            Listas Negras
          </span>
          <span class="stepper-item-title" v-if="item == 5"> Archivos </span>
        </div>
      </div>
      <!-- Contenido del stepper -->
      <div class="stepper-content" v-for="item in 5" :key="item">
        <!-- Contenido PASO 1 -->
        <div class="stepper-pane" v-if="step == 1 && step == item">
          <div class="row">
            <div class="column">
              <div class="row">
                <label for="txtName">Nombre</label>
                <input type="text" name="txtName" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="limitTransQuantity"
                  id="limitTransQuantity"
                />
                <label for="limitTransQuantity"
                  >Limitar a cantidad en transacción</label
                >
              </div>
            </div>
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="inactiveCheck"
                  id="inactiveCheck"
                />
                <label for="inactiveCheck">Inactivo</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenido PASO 2 -->
        <div class="stepper-pane" v-if="step == 2 && step == item">
          <div class="email">
            <div class="column">
              <div class="row">
                <label for="txtAsuntoCorreo">Título de correo</label>
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
        </div>

        <!-- Contenido PASO 3 -->
        <div class="stepper-pane" v-if="step == 3 && step == item">
          <div class="email">
            <div class="column">
              <div class="row">
                <label for="txtAsuntoCorreo">Título de correo error</label>
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
                <label for="txtCorreo">Cuerpo de correo error</label>
                <textarea
                  name="txtCorreo"
                  id="txtCorreo"
                  class="txtAreaEmail"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <!-- Contenido PASO 4 -->
        <div class="stepper-pane" v-if="step == 4 && step == item">
          <div class="row">
            <div class="column">
              <div>
                <label for="txtName">Block Status</label>
              </div>
              <div>
                <select name="cars" id="cars" multiple>
                  <option value="Definitivos">Definitivos</option>
                  <option value="Desvirtuados">Desvirtuados</option>
                  <option value="Presuntos">Presuntos</option>
                  <option value="Sentenciasfavorables">
                    Sentencias favorables
                  </option>
                </select>
              </div>
            </div>
            <div class="column">
              <div>
                <label for="txtName">Warning Status</label>
              </div>
              <div>
                <select name="cars" id="cars" multiple>
                  <option value="Definitivos">Definitivos</option>
                  <option value="Desvirtuados">Desvirtuados</option>
                  <option value="Presuntos">Presuntos</option>
                  <option value="Sentenciasfavorables">
                    Sentencias favorables
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="email">
            <div class="column">
              <div>
                <label for="txtWarning">Warning message</label>
              </div>
              <div>
                <textarea
                  name="txtWarning"
                  id="txtWarning"
                  class="txtAreaEmail"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <!-- Contenido PASO 5 -->
        <div class="stepper-pane" v-if="step == 5 && step == item">
          <div class="row">
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="limitTransQuantity"
                  id="limitTransQuantity"
                />
                <label for="limitTransQuantity"
                  >PDF Mandatory</label
                >
              </div>
            </div>
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="inactiveCheck"
                  id="inactiveCheck"
                />
                <label for="inactiveCheck">XML Mandatory</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="row">
                <input
                  type="checkbox"
                  name="limitTransQuantity"
                  id="limitTransQuantity"
                />
                <label for="limitTransQuantity"
                  >Evidence Mandatory</label
                >
              </div>
            </div>
            <div class="column">
              <div class="row">
                <label for="txtName">Ext. for evidence</label>
                <input type="text" name="txtName" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div :hidden="step === 1">

          <div class="btn" @click="step--;" >
            Anterior
          </div>
        </div>
        <div class="btn btn--green-1" @click="step==5?step:step++" >
          {{(step==5?'Guardar':'Siguiente')}}
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
      return (100 / 4) * (this.step - 1) + "%";
    },
  },
  created() {
    // this.getList();
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
          "Access-Control-Allow-Headers": "authorization",
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
          (str += " url:url,"),
          (str += " headers:{},"),
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
@import "../../../assets/scss/stepper.scss";
</style>
  