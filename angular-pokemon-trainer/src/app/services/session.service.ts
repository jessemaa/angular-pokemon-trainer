import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class SessionService {
    active(): boolean {
        const trainer = localStorage.getItem('trainerName')
        return Boolean(trainer);
    }

}