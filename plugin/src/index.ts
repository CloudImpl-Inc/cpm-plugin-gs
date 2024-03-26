import {CPMPluginCreator} from "@cloudimpl-inc/cpm";

const init: CPMPluginCreator = ctx => {
    return {
        name: `\${{ cpm.plugin-name-short }}`,
        actions: {
            'test': (ctx, input) => {
                console.log(`input = ${JSON.stringify(input)}`);
                return {result: 'hello world'};
            }
        }
    }
}

export default init;