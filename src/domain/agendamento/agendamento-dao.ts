import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Agendamento } from '../../domain/agendamento/agendamento';

@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage) { }

    salva(agendamento: Agendamento) {

        let key = this._getKey(agendamento);
        return this._storage.set(key, agendamento);
    }

    _getKey(agendamento: Agendamento) {

        return agendamento.email + agendamento.data.substr(0, 10);

    }

    ehAgendamentoDuplicado(agendamento: Agendamento) {

        let key = this._getKey(agendamento);

        return this._storage
            .get(key)
            .then(dado => {
                return dado ? true : false;
            });
    }

}