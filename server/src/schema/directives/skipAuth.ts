import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils"
import { GraphQLSchema } from "graphql"

export const skipAuthDirective = (directiveName: string ) => {
    return {
        skipAuthDirectiveTypeDefs: /* GraphQL */`
            directive @${directiveName}() on  FIELD_DEFINITION
        `,
        skipAuthDirectiveTransformer: (schema: GraphQLSchema) => {
            mapSchema(schema, {
                [MapperKind.FIELD](fieldConfig, _fieldName, _typeName) {
                    const directive = getDirective(schema, fieldConfig, directiveName)?.[0];
                    if(directive) {
                        return fieldConfig;
                    }
                }
            })
        }
    }
};