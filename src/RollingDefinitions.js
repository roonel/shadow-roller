export const ANY_SUCCESS = "any_succ";
export const DECREASE_CORRUPTION = "dec_corr";
export const INCREASE_CORRUPTION = "inc_corr";
export const NEGATE_SUCCESS = "neg_succ";
export const DAMAGE_AGENT = "dam_agent";
export const INSANITY_TO_AGENT = "ins_agent";
export const SKILL_SUCCESS = "skill_succ";
export const MAGIC_SUCCESS = "mag_succ";
export const WEAPON_SUCCESS = "wep_succ";

export const BOON_COLOR = "yellow";
export const BANE_COLOR = "red";
export const ENCOUNTER_COLOR = "blue";
export const MAGIC_COLOR = "green";
export const SKILL_COLOR = "orange";
export const WEAPON_COLOR = "grey";
export const SHADOW_COLOR = "purple";

export function rollBoons(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
            case 2:
            case 3:
                rolled.push({die: ANY_SUCCESS, color: BOON_COLOR});
                break;
            case 4:
            case 5:
            case 6:
                rolled.push({die: DECREASE_CORRUPTION, color: BOON_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

export function rollBanes(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
            case 2:
            case 3:
                rolled.push({die: NEGATE_SUCCESS, color: BANE_COLOR});
                break;
            case 4:
            case 5:
            case 6:
                rolled.push({die: INCREASE_CORRUPTION, color: BANE_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

export function rollEncounters(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
                rolled.push({die: DECREASE_CORRUPTION, color: ENCOUNTER_COLOR});
                break;
            case 2:
            case 5:
                rolled.push({die: DAMAGE_AGENT, color: ENCOUNTER_COLOR});
                break;
            case 3:
            case 4:
                rolled.push({die: INSANITY_TO_AGENT, color: ENCOUNTER_COLOR});
                break;
            case 6:
                rolled.push({die: INCREASE_CORRUPTION, color: ENCOUNTER_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

export function rollMagics(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
            case 2:
            case 3:
                rolled.push({die: MAGIC_SUCCESS, color: MAGIC_COLOR});
                break;
            case 4:
                rolled.push({die: INSANITY_TO_AGENT, color: MAGIC_COLOR});
                break;
            case 5:
                rolled.push({die: DAMAGE_AGENT, color: MAGIC_COLOR});
                break;
            case 6:
                rolled.push({die: INCREASE_CORRUPTION, color: MAGIC_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

export function rollSkills(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
            case 2:
            case 3:
                rolled.push({die: SKILL_SUCCESS, color: SKILL_COLOR});
                break;
            case 4:
                rolled.push({die: INSANITY_TO_AGENT, color: SKILL_COLOR});
                break;
            case 5:
                rolled.push({die: DAMAGE_AGENT, color: SKILL_COLOR});
                break;
            case 6:
                rolled.push({die: INCREASE_CORRUPTION, color: SKILL_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

export function rollWeapons(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
            case 2:
            case 3:
                rolled.push({die: WEAPON_SUCCESS, color: WEAPON_COLOR});
                break;
            case 4:
                rolled.push({die: INSANITY_TO_AGENT, color: WEAPON_COLOR});
                break;
            case 5:
                rolled.push({die: DAMAGE_AGENT, color: WEAPON_COLOR});
                break;
            case 6:
                rolled.push({die: INCREASE_CORRUPTION, color: WEAPON_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

export function rollShadows(howMany) {
    let rolled = [];
    let i = 0;
    while (i < howMany) {
        switch (rollD6()) {
            case 1:
                rolled.push({die: WEAPON_SUCCESS, color: SHADOW_COLOR});
                break;
            case 2:
                rolled.push({die: MAGIC_SUCCESS, color: SHADOW_COLOR});
                break;
            case 3:
                rolled.push({die: SKILL_SUCCESS, color: SHADOW_COLOR});
                break;
            case 4:
                rolled.push({die: INSANITY_TO_AGENT, color: SHADOW_COLOR});
                break;
            case 5:
                rolled.push({die: DAMAGE_AGENT, color: SHADOW_COLOR});
                break;
            case 6:
                rolled.push({die: INCREASE_CORRUPTION, color: SHADOW_COLOR});
                break;
            default: break;
        }
        i++;
    }
    return rolled;
}

function rollD6() {
    return Math.floor(Math.random() * 6) + 1;
}