
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Publicacao
 * 
 */
export type Publicacao = $Result.DefaultSelection<Prisma.$PublicacaoPayload>
/**
 * Model Imagem
 * 
 */
export type Imagem = $Result.DefaultSelection<Prisma.$ImagemPayload>
/**
 * Model Comentario
 * 
 */
export type Comentario = $Result.DefaultSelection<Prisma.$ComentarioPayload>
/**
 * Model Curtida
 * 
 */
export type Curtida = $Result.DefaultSelection<Prisma.$CurtidaPayload>
/**
 * Model Seguir
 * 
 */
export type Seguir = $Result.DefaultSelection<Prisma.$SeguirPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicacao`: Exposes CRUD operations for the **Publicacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicacaos
    * const publicacaos = await prisma.publicacao.findMany()
    * ```
    */
  get publicacao(): Prisma.PublicacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagem`: Exposes CRUD operations for the **Imagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagems
    * const imagems = await prisma.imagem.findMany()
    * ```
    */
  get imagem(): Prisma.ImagemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentario`: Exposes CRUD operations for the **Comentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentario.findMany()
    * ```
    */
  get comentario(): Prisma.ComentarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curtida`: Exposes CRUD operations for the **Curtida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curtidas
    * const curtidas = await prisma.curtida.findMany()
    * ```
    */
  get curtida(): Prisma.CurtidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seguir`: Exposes CRUD operations for the **Seguir** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguirs
    * const seguirs = await prisma.seguir.findMany()
    * ```
    */
  get seguir(): Prisma.SeguirDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Publicacao: 'Publicacao',
    Imagem: 'Imagem',
    Comentario: 'Comentario',
    Curtida: 'Curtida',
    Seguir: 'Seguir'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "publicacao" | "imagem" | "comentario" | "curtida" | "seguir"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Publicacao: {
        payload: Prisma.$PublicacaoPayload<ExtArgs>
        fields: Prisma.PublicacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          findFirst: {
            args: Prisma.PublicacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          findMany: {
            args: Prisma.PublicacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>[]
          }
          create: {
            args: Prisma.PublicacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          createMany: {
            args: Prisma.PublicacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>[]
          }
          delete: {
            args: Prisma.PublicacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          update: {
            args: Prisma.PublicacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          deleteMany: {
            args: Prisma.PublicacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>[]
          }
          upsert: {
            args: Prisma.PublicacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacaoPayload>
          }
          aggregate: {
            args: Prisma.PublicacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicacao>
          }
          groupBy: {
            args: Prisma.PublicacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacaoCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacaoCountAggregateOutputType> | number
          }
        }
      }
      Imagem: {
        payload: Prisma.$ImagemPayload<ExtArgs>
        fields: Prisma.ImagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          findFirst: {
            args: Prisma.ImagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          findMany: {
            args: Prisma.ImagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>[]
          }
          create: {
            args: Prisma.ImagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          createMany: {
            args: Prisma.ImagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>[]
          }
          delete: {
            args: Prisma.ImagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          update: {
            args: Prisma.ImagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          deleteMany: {
            args: Prisma.ImagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>[]
          }
          upsert: {
            args: Prisma.ImagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagemPayload>
          }
          aggregate: {
            args: Prisma.ImagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagem>
          }
          groupBy: {
            args: Prisma.ImagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagemCountArgs<ExtArgs>
            result: $Utils.Optional<ImagemCountAggregateOutputType> | number
          }
        }
      }
      Comentario: {
        payload: Prisma.$ComentarioPayload<ExtArgs>
        fields: Prisma.ComentarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findFirst: {
            args: Prisma.ComentarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          findMany: {
            args: Prisma.ComentarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          create: {
            args: Prisma.ComentarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          createMany: {
            args: Prisma.ComentarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComentarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          delete: {
            args: Prisma.ComentarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          update: {
            args: Prisma.ComentarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          deleteMany: {
            args: Prisma.ComentarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComentarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>[]
          }
          upsert: {
            args: Prisma.ComentarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentarioPayload>
          }
          aggregate: {
            args: Prisma.ComentarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentario>
          }
          groupBy: {
            args: Prisma.ComentarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentarioCountArgs<ExtArgs>
            result: $Utils.Optional<ComentarioCountAggregateOutputType> | number
          }
        }
      }
      Curtida: {
        payload: Prisma.$CurtidaPayload<ExtArgs>
        fields: Prisma.CurtidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurtidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurtidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          findFirst: {
            args: Prisma.CurtidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurtidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          findMany: {
            args: Prisma.CurtidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>[]
          }
          create: {
            args: Prisma.CurtidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          createMany: {
            args: Prisma.CurtidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurtidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>[]
          }
          delete: {
            args: Prisma.CurtidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          update: {
            args: Prisma.CurtidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          deleteMany: {
            args: Prisma.CurtidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurtidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurtidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>[]
          }
          upsert: {
            args: Prisma.CurtidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurtidaPayload>
          }
          aggregate: {
            args: Prisma.CurtidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurtida>
          }
          groupBy: {
            args: Prisma.CurtidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurtidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurtidaCountArgs<ExtArgs>
            result: $Utils.Optional<CurtidaCountAggregateOutputType> | number
          }
        }
      }
      Seguir: {
        payload: Prisma.$SeguirPayload<ExtArgs>
        fields: Prisma.SeguirFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeguirFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeguirFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>
          }
          findFirst: {
            args: Prisma.SeguirFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeguirFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>
          }
          findMany: {
            args: Prisma.SeguirFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>[]
          }
          create: {
            args: Prisma.SeguirCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>
          }
          createMany: {
            args: Prisma.SeguirCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeguirCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>[]
          }
          delete: {
            args: Prisma.SeguirDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>
          }
          update: {
            args: Prisma.SeguirUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>
          }
          deleteMany: {
            args: Prisma.SeguirDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeguirUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeguirUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>[]
          }
          upsert: {
            args: Prisma.SeguirUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeguirPayload>
          }
          aggregate: {
            args: Prisma.SeguirAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeguir>
          }
          groupBy: {
            args: Prisma.SeguirGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeguirGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeguirCountArgs<ExtArgs>
            result: $Utils.Optional<SeguirCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    publicacao?: PublicacaoOmit
    imagem?: ImagemOmit
    comentario?: ComentarioOmit
    curtida?: CurtidaOmit
    seguir?: SeguirOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    publicacoes: number
    comentarios: number
    curtidas: number
    seguindo: number
    seguidores: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacoes?: boolean | UsuarioCountOutputTypeCountPublicacoesArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    curtidas?: boolean | UsuarioCountOutputTypeCountCurtidasArgs
    seguindo?: boolean | UsuarioCountOutputTypeCountSeguindoArgs
    seguidores?: boolean | UsuarioCountOutputTypeCountSeguidoresArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPublicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeguindoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguirWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSeguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguirWhereInput
  }


  /**
   * Count Type PublicacaoCountOutputType
   */

  export type PublicacaoCountOutputType = {
    comentarios: number
    curtidas: number
    imagens: number
  }

  export type PublicacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comentarios?: boolean | PublicacaoCountOutputTypeCountComentariosArgs
    curtidas?: boolean | PublicacaoCountOutputTypeCountCurtidasArgs
    imagens?: boolean | PublicacaoCountOutputTypeCountImagensArgs
  }

  // Custom InputTypes
  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacaoCountOutputType
     */
    select?: PublicacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
  }

  /**
   * PublicacaoCountOutputType without action
   */
  export type PublicacaoCountOutputTypeCountImagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    email: string | null
    senhaHash: string | null
    biografia: string | null
    urlFotoPerfil: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    email: string | null
    senhaHash: string | null
    biografia: string | null
    urlFotoPerfil: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nomeUsuario: number
    email: number
    senhaHash: number
    biografia: number
    urlFotoPerfil: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    biografia?: true
    urlFotoPerfil?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    biografia?: true
    urlFotoPerfil?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    biografia?: true
    urlFotoPerfil?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia: string | null
    urlFotoPerfil: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    publicacoes?: boolean | Usuario$publicacoesArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidas?: boolean | Usuario$curtidasArgs<ExtArgs>
    seguindo?: boolean | Usuario$seguindoArgs<ExtArgs>
    seguidores?: boolean | Usuario$seguidoresArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    biografia?: boolean
    urlFotoPerfil?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeUsuario" | "email" | "senhaHash" | "biografia" | "urlFotoPerfil" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacoes?: boolean | Usuario$publicacoesArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidas?: boolean | Usuario$curtidasArgs<ExtArgs>
    seguindo?: boolean | Usuario$seguindoArgs<ExtArgs>
    seguidores?: boolean | Usuario$seguidoresArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      publicacoes: Prisma.$PublicacaoPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPayload<ExtArgs>[]
      seguindo: Prisma.$SeguirPayload<ExtArgs>[]
      seguidores: Prisma.$SeguirPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeUsuario: string
      email: string
      senhaHash: string
      biografia: string | null
      urlFotoPerfil: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacoes<T extends Usuario$publicacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$publicacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Usuario$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seguindo<T extends Usuario$seguindoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$seguindoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seguidores<T extends Usuario$seguidoresArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$seguidoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nomeUsuario: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senhaHash: FieldRef<"Usuario", 'String'>
    readonly biografia: FieldRef<"Usuario", 'String'>
    readonly urlFotoPerfil: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.publicacoes
   */
  export type Usuario$publicacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    where?: PublicacaoWhereInput
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    cursor?: PublicacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Usuario.comentarios
   */
  export type Usuario$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Usuario.curtidas
   */
  export type Usuario$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    where?: CurtidaWhereInput
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    cursor?: CurtidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Usuario.seguindo
   */
  export type Usuario$seguindoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    where?: SeguirWhereInput
    orderBy?: SeguirOrderByWithRelationInput | SeguirOrderByWithRelationInput[]
    cursor?: SeguirWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguirScalarFieldEnum | SeguirScalarFieldEnum[]
  }

  /**
   * Usuario.seguidores
   */
  export type Usuario$seguidoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    where?: SeguirWhereInput
    orderBy?: SeguirOrderByWithRelationInput | SeguirOrderByWithRelationInput[]
    cursor?: SeguirWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeguirScalarFieldEnum | SeguirScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Publicacao
   */

  export type AggregatePublicacao = {
    _count: PublicacaoCountAggregateOutputType | null
    _avg: PublicacaoAvgAggregateOutputType | null
    _sum: PublicacaoSumAggregateOutputType | null
    _min: PublicacaoMinAggregateOutputType | null
    _max: PublicacaoMaxAggregateOutputType | null
  }

  export type PublicacaoAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
  }

  export type PublicacaoSumAggregateOutputType = {
    id: number | null
    autorId: number | null
  }

  export type PublicacaoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    criadoEm: Date | null
    categoria: string | null
    autorId: number | null
  }

  export type PublicacaoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    criadoEm: Date | null
    categoria: string | null
    autorId: number | null
  }

  export type PublicacaoCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    criadoEm: number
    categoria: number
    autorId: number
    _all: number
  }


  export type PublicacaoAvgAggregateInputType = {
    id?: true
    autorId?: true
  }

  export type PublicacaoSumAggregateInputType = {
    id?: true
    autorId?: true
  }

  export type PublicacaoMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    criadoEm?: true
    categoria?: true
    autorId?: true
  }

  export type PublicacaoMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    criadoEm?: true
    categoria?: true
    autorId?: true
  }

  export type PublicacaoCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    criadoEm?: true
    categoria?: true
    autorId?: true
    _all?: true
  }

  export type PublicacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacao to aggregate.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicacaos
    **/
    _count?: true | PublicacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacaoMaxAggregateInputType
  }

  export type GetPublicacaoAggregateType<T extends PublicacaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacao[P]>
      : GetScalarType<T[P], AggregatePublicacao[P]>
  }




  export type PublicacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacaoWhereInput
    orderBy?: PublicacaoOrderByWithAggregationInput | PublicacaoOrderByWithAggregationInput[]
    by: PublicacaoScalarFieldEnum[] | PublicacaoScalarFieldEnum
    having?: PublicacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacaoCountAggregateInputType | true
    _avg?: PublicacaoAvgAggregateInputType
    _sum?: PublicacaoSumAggregateInputType
    _min?: PublicacaoMinAggregateInputType
    _max?: PublicacaoMaxAggregateInputType
  }

  export type PublicacaoGroupByOutputType = {
    id: number
    titulo: string
    conteudo: string
    criadoEm: Date
    categoria: string | null
    autorId: number
    _count: PublicacaoCountAggregateOutputType | null
    _avg: PublicacaoAvgAggregateOutputType | null
    _sum: PublicacaoSumAggregateOutputType | null
    _min: PublicacaoMinAggregateOutputType | null
    _max: PublicacaoMaxAggregateOutputType | null
  }

  type GetPublicacaoGroupByPayload<T extends PublicacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacaoGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacaoGroupByOutputType[P]>
        }
      >
    >


  export type PublicacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentarios?: boolean | Publicacao$comentariosArgs<ExtArgs>
    curtidas?: boolean | Publicacao$curtidasArgs<ExtArgs>
    imagens?: boolean | Publicacao$imagensArgs<ExtArgs>
    _count?: boolean | PublicacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacao"]>

  export type PublicacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacao"]>

  export type PublicacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacao"]>

  export type PublicacaoSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    categoria?: boolean
    autorId?: boolean
  }

  export type PublicacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "conteudo" | "criadoEm" | "categoria" | "autorId", ExtArgs["result"]["publicacao"]>
  export type PublicacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    comentarios?: boolean | Publicacao$comentariosArgs<ExtArgs>
    curtidas?: boolean | Publicacao$curtidasArgs<ExtArgs>
    imagens?: boolean | Publicacao$imagensArgs<ExtArgs>
    _count?: boolean | PublicacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PublicacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PublicacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicacao"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPayload<ExtArgs>[]
      imagens: Prisma.$ImagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      conteudo: string
      criadoEm: Date
      categoria: string | null
      autorId: number
    }, ExtArgs["result"]["publicacao"]>
    composites: {}
  }

  type PublicacaoGetPayload<S extends boolean | null | undefined | PublicacaoDefaultArgs> = $Result.GetResult<Prisma.$PublicacaoPayload, S>

  type PublicacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicacaoCountAggregateInputType | true
    }

  export interface PublicacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicacao'], meta: { name: 'Publicacao' } }
    /**
     * Find zero or one Publicacao that matches the filter.
     * @param {PublicacaoFindUniqueArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacaoFindUniqueArgs>(args: SelectSubset<T, PublicacaoFindUniqueArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicacaoFindUniqueOrThrowArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoFindFirstArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacaoFindFirstArgs>(args?: SelectSubset<T, PublicacaoFindFirstArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoFindFirstOrThrowArgs} args - Arguments to find a Publicacao
     * @example
     * // Get one Publicacao
     * const publicacao = await prisma.publicacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicacaos
     * const publicacaos = await prisma.publicacao.findMany()
     * 
     * // Get first 10 Publicacaos
     * const publicacaos = await prisma.publicacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacaoWithIdOnly = await prisma.publicacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicacaoFindManyArgs>(args?: SelectSubset<T, PublicacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicacao.
     * @param {PublicacaoCreateArgs} args - Arguments to create a Publicacao.
     * @example
     * // Create one Publicacao
     * const Publicacao = await prisma.publicacao.create({
     *   data: {
     *     // ... data to create a Publicacao
     *   }
     * })
     * 
     */
    create<T extends PublicacaoCreateArgs>(args: SelectSubset<T, PublicacaoCreateArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicacaos.
     * @param {PublicacaoCreateManyArgs} args - Arguments to create many Publicacaos.
     * @example
     * // Create many Publicacaos
     * const publicacao = await prisma.publicacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacaoCreateManyArgs>(args?: SelectSubset<T, PublicacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publicacaos and returns the data saved in the database.
     * @param {PublicacaoCreateManyAndReturnArgs} args - Arguments to create many Publicacaos.
     * @example
     * // Create many Publicacaos
     * const publicacao = await prisma.publicacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publicacaos and only return the `id`
     * const publicacaoWithIdOnly = await prisma.publicacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publicacao.
     * @param {PublicacaoDeleteArgs} args - Arguments to delete one Publicacao.
     * @example
     * // Delete one Publicacao
     * const Publicacao = await prisma.publicacao.delete({
     *   where: {
     *     // ... filter to delete one Publicacao
     *   }
     * })
     * 
     */
    delete<T extends PublicacaoDeleteArgs>(args: SelectSubset<T, PublicacaoDeleteArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicacao.
     * @param {PublicacaoUpdateArgs} args - Arguments to update one Publicacao.
     * @example
     * // Update one Publicacao
     * const publicacao = await prisma.publicacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacaoUpdateArgs>(args: SelectSubset<T, PublicacaoUpdateArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicacaos.
     * @param {PublicacaoDeleteManyArgs} args - Arguments to filter Publicacaos to delete.
     * @example
     * // Delete a few Publicacaos
     * const { count } = await prisma.publicacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacaoDeleteManyArgs>(args?: SelectSubset<T, PublicacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicacaos
     * const publicacao = await prisma.publicacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacaoUpdateManyArgs>(args: SelectSubset<T, PublicacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacaos and returns the data updated in the database.
     * @param {PublicacaoUpdateManyAndReturnArgs} args - Arguments to update many Publicacaos.
     * @example
     * // Update many Publicacaos
     * const publicacao = await prisma.publicacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publicacaos and only return the `id`
     * const publicacaoWithIdOnly = await prisma.publicacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publicacao.
     * @param {PublicacaoUpsertArgs} args - Arguments to update or create a Publicacao.
     * @example
     * // Update or create a Publicacao
     * const publicacao = await prisma.publicacao.upsert({
     *   create: {
     *     // ... data to create a Publicacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicacao we want to update
     *   }
     * })
     */
    upsert<T extends PublicacaoUpsertArgs>(args: SelectSubset<T, PublicacaoUpsertArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoCountArgs} args - Arguments to filter Publicacaos to count.
     * @example
     * // Count the number of Publicacaos
     * const count = await prisma.publicacao.count({
     *   where: {
     *     // ... the filter for the Publicacaos we want to count
     *   }
     * })
    **/
    count<T extends PublicacaoCountArgs>(
      args?: Subset<T, PublicacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicacaoAggregateArgs>(args: Subset<T, PublicacaoAggregateArgs>): Prisma.PrismaPromise<GetPublicacaoAggregateType<T>>

    /**
     * Group by Publicacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacaoGroupByArgs['orderBy'] }
        : { orderBy?: PublicacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicacao model
   */
  readonly fields: PublicacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comentarios<T extends Publicacao$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Publicacao$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Publicacao$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Publicacao$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    imagens<T extends Publicacao$imagensArgs<ExtArgs> = {}>(args?: Subset<T, Publicacao$imagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publicacao model
   */
  interface PublicacaoFieldRefs {
    readonly id: FieldRef<"Publicacao", 'Int'>
    readonly titulo: FieldRef<"Publicacao", 'String'>
    readonly conteudo: FieldRef<"Publicacao", 'String'>
    readonly criadoEm: FieldRef<"Publicacao", 'DateTime'>
    readonly categoria: FieldRef<"Publicacao", 'String'>
    readonly autorId: FieldRef<"Publicacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Publicacao findUnique
   */
  export type PublicacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao findUniqueOrThrow
   */
  export type PublicacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao findFirst
   */
  export type PublicacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacaos.
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacaos.
     */
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao findFirstOrThrow
   */
  export type PublicacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacao to fetch.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacaos.
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacaos.
     */
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao findMany
   */
  export type PublicacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter, which Publicacaos to fetch.
     */
    where?: PublicacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacaos to fetch.
     */
    orderBy?: PublicacaoOrderByWithRelationInput | PublicacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicacaos.
     */
    cursor?: PublicacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacaos.
     */
    skip?: number
    distinct?: PublicacaoScalarFieldEnum | PublicacaoScalarFieldEnum[]
  }

  /**
   * Publicacao create
   */
  export type PublicacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicacao.
     */
    data: XOR<PublicacaoCreateInput, PublicacaoUncheckedCreateInput>
  }

  /**
   * Publicacao createMany
   */
  export type PublicacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicacaos.
     */
    data: PublicacaoCreateManyInput | PublicacaoCreateManyInput[]
  }

  /**
   * Publicacao createManyAndReturn
   */
  export type PublicacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Publicacaos.
     */
    data: PublicacaoCreateManyInput | PublicacaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicacao update
   */
  export type PublicacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicacao.
     */
    data: XOR<PublicacaoUpdateInput, PublicacaoUncheckedUpdateInput>
    /**
     * Choose, which Publicacao to update.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao updateMany
   */
  export type PublicacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicacaos.
     */
    data: XOR<PublicacaoUpdateManyMutationInput, PublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which Publicacaos to update
     */
    where?: PublicacaoWhereInput
    /**
     * Limit how many Publicacaos to update.
     */
    limit?: number
  }

  /**
   * Publicacao updateManyAndReturn
   */
  export type PublicacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * The data used to update Publicacaos.
     */
    data: XOR<PublicacaoUpdateManyMutationInput, PublicacaoUncheckedUpdateManyInput>
    /**
     * Filter which Publicacaos to update
     */
    where?: PublicacaoWhereInput
    /**
     * Limit how many Publicacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicacao upsert
   */
  export type PublicacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicacao to update in case it exists.
     */
    where: PublicacaoWhereUniqueInput
    /**
     * In case the Publicacao found by the `where` argument doesn't exist, create a new Publicacao with this data.
     */
    create: XOR<PublicacaoCreateInput, PublicacaoUncheckedCreateInput>
    /**
     * In case the Publicacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacaoUpdateInput, PublicacaoUncheckedUpdateInput>
  }

  /**
   * Publicacao delete
   */
  export type PublicacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
    /**
     * Filter which Publicacao to delete.
     */
    where: PublicacaoWhereUniqueInput
  }

  /**
   * Publicacao deleteMany
   */
  export type PublicacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacaos to delete
     */
    where?: PublicacaoWhereInput
    /**
     * Limit how many Publicacaos to delete.
     */
    limit?: number
  }

  /**
   * Publicacao.comentarios
   */
  export type Publicacao$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    cursor?: ComentarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Publicacao.curtidas
   */
  export type Publicacao$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    where?: CurtidaWhereInput
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    cursor?: CurtidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Publicacao.imagens
   */
  export type Publicacao$imagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    where?: ImagemWhereInput
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    cursor?: ImagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Publicacao without action
   */
  export type PublicacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacao
     */
    select?: PublicacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacao
     */
    omit?: PublicacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacaoInclude<ExtArgs> | null
  }


  /**
   * Model Imagem
   */

  export type AggregateImagem = {
    _count: ImagemCountAggregateOutputType | null
    _avg: ImagemAvgAggregateOutputType | null
    _sum: ImagemSumAggregateOutputType | null
    _min: ImagemMinAggregateOutputType | null
    _max: ImagemMaxAggregateOutputType | null
  }

  export type ImagemAvgAggregateOutputType = {
    id: number | null
    ordem: number | null
    publicacaoId: number | null
  }

  export type ImagemSumAggregateOutputType = {
    id: number | null
    ordem: number | null
    publicacaoId: number | null
  }

  export type ImagemMinAggregateOutputType = {
    id: number | null
    url: string | null
    descricao: string | null
    ordem: number | null
    criadoEm: Date | null
    publicacaoId: number | null
  }

  export type ImagemMaxAggregateOutputType = {
    id: number | null
    url: string | null
    descricao: string | null
    ordem: number | null
    criadoEm: Date | null
    publicacaoId: number | null
  }

  export type ImagemCountAggregateOutputType = {
    id: number
    url: number
    descricao: number
    ordem: number
    criadoEm: number
    publicacaoId: number
    _all: number
  }


  export type ImagemAvgAggregateInputType = {
    id?: true
    ordem?: true
    publicacaoId?: true
  }

  export type ImagemSumAggregateInputType = {
    id?: true
    ordem?: true
    publicacaoId?: true
  }

  export type ImagemMinAggregateInputType = {
    id?: true
    url?: true
    descricao?: true
    ordem?: true
    criadoEm?: true
    publicacaoId?: true
  }

  export type ImagemMaxAggregateInputType = {
    id?: true
    url?: true
    descricao?: true
    ordem?: true
    criadoEm?: true
    publicacaoId?: true
  }

  export type ImagemCountAggregateInputType = {
    id?: true
    url?: true
    descricao?: true
    ordem?: true
    criadoEm?: true
    publicacaoId?: true
    _all?: true
  }

  export type ImagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagem to aggregate.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagems
    **/
    _count?: true | ImagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagemMaxAggregateInputType
  }

  export type GetImagemAggregateType<T extends ImagemAggregateArgs> = {
        [P in keyof T & keyof AggregateImagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagem[P]>
      : GetScalarType<T[P], AggregateImagem[P]>
  }




  export type ImagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemWhereInput
    orderBy?: ImagemOrderByWithAggregationInput | ImagemOrderByWithAggregationInput[]
    by: ImagemScalarFieldEnum[] | ImagemScalarFieldEnum
    having?: ImagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagemCountAggregateInputType | true
    _avg?: ImagemAvgAggregateInputType
    _sum?: ImagemSumAggregateInputType
    _min?: ImagemMinAggregateInputType
    _max?: ImagemMaxAggregateInputType
  }

  export type ImagemGroupByOutputType = {
    id: number
    url: string
    descricao: string | null
    ordem: number | null
    criadoEm: Date
    publicacaoId: number
    _count: ImagemCountAggregateOutputType | null
    _avg: ImagemAvgAggregateOutputType | null
    _sum: ImagemSumAggregateOutputType | null
    _min: ImagemMinAggregateOutputType | null
    _max: ImagemMaxAggregateOutputType | null
  }

  type GetImagemGroupByPayload<T extends ImagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagemGroupByOutputType[P]>
            : GetScalarType<T[P], ImagemGroupByOutputType[P]>
        }
      >
    >


  export type ImagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    criadoEm?: boolean
    publicacaoId?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    criadoEm?: boolean
    publicacaoId?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    criadoEm?: boolean
    publicacaoId?: boolean
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectScalar = {
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    criadoEm?: boolean
    publicacaoId?: boolean
  }

  export type ImagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "descricao" | "ordem" | "criadoEm" | "publicacaoId", ExtArgs["result"]["imagem"]>
  export type ImagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }
  export type ImagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }
  export type ImagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }

  export type $ImagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagem"
    objects: {
      publicacao: Prisma.$PublicacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      descricao: string | null
      ordem: number | null
      criadoEm: Date
      publicacaoId: number
    }, ExtArgs["result"]["imagem"]>
    composites: {}
  }

  type ImagemGetPayload<S extends boolean | null | undefined | ImagemDefaultArgs> = $Result.GetResult<Prisma.$ImagemPayload, S>

  type ImagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagemCountAggregateInputType | true
    }

  export interface ImagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagem'], meta: { name: 'Imagem' } }
    /**
     * Find zero or one Imagem that matches the filter.
     * @param {ImagemFindUniqueArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagemFindUniqueArgs>(args: SelectSubset<T, ImagemFindUniqueArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Imagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagemFindUniqueOrThrowArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagemFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemFindFirstArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagemFindFirstArgs>(args?: SelectSubset<T, ImagemFindFirstArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Imagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemFindFirstOrThrowArgs} args - Arguments to find a Imagem
     * @example
     * // Get one Imagem
     * const imagem = await prisma.imagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagemFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Imagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagems
     * const imagems = await prisma.imagem.findMany()
     * 
     * // Get first 10 Imagems
     * const imagems = await prisma.imagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagemWithIdOnly = await prisma.imagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagemFindManyArgs>(args?: SelectSubset<T, ImagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Imagem.
     * @param {ImagemCreateArgs} args - Arguments to create a Imagem.
     * @example
     * // Create one Imagem
     * const Imagem = await prisma.imagem.create({
     *   data: {
     *     // ... data to create a Imagem
     *   }
     * })
     * 
     */
    create<T extends ImagemCreateArgs>(args: SelectSubset<T, ImagemCreateArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Imagems.
     * @param {ImagemCreateManyArgs} args - Arguments to create many Imagems.
     * @example
     * // Create many Imagems
     * const imagem = await prisma.imagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagemCreateManyArgs>(args?: SelectSubset<T, ImagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagems and returns the data saved in the database.
     * @param {ImagemCreateManyAndReturnArgs} args - Arguments to create many Imagems.
     * @example
     * // Create many Imagems
     * const imagem = await prisma.imagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagems and only return the `id`
     * const imagemWithIdOnly = await prisma.imagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagemCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Imagem.
     * @param {ImagemDeleteArgs} args - Arguments to delete one Imagem.
     * @example
     * // Delete one Imagem
     * const Imagem = await prisma.imagem.delete({
     *   where: {
     *     // ... filter to delete one Imagem
     *   }
     * })
     * 
     */
    delete<T extends ImagemDeleteArgs>(args: SelectSubset<T, ImagemDeleteArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Imagem.
     * @param {ImagemUpdateArgs} args - Arguments to update one Imagem.
     * @example
     * // Update one Imagem
     * const imagem = await prisma.imagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagemUpdateArgs>(args: SelectSubset<T, ImagemUpdateArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Imagems.
     * @param {ImagemDeleteManyArgs} args - Arguments to filter Imagems to delete.
     * @example
     * // Delete a few Imagems
     * const { count } = await prisma.imagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagemDeleteManyArgs>(args?: SelectSubset<T, ImagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagems
     * const imagem = await prisma.imagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagemUpdateManyArgs>(args: SelectSubset<T, ImagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagems and returns the data updated in the database.
     * @param {ImagemUpdateManyAndReturnArgs} args - Arguments to update many Imagems.
     * @example
     * // Update many Imagems
     * const imagem = await prisma.imagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Imagems and only return the `id`
     * const imagemWithIdOnly = await prisma.imagem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagemUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Imagem.
     * @param {ImagemUpsertArgs} args - Arguments to update or create a Imagem.
     * @example
     * // Update or create a Imagem
     * const imagem = await prisma.imagem.upsert({
     *   create: {
     *     // ... data to create a Imagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagem we want to update
     *   }
     * })
     */
    upsert<T extends ImagemUpsertArgs>(args: SelectSubset<T, ImagemUpsertArgs<ExtArgs>>): Prisma__ImagemClient<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Imagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemCountArgs} args - Arguments to filter Imagems to count.
     * @example
     * // Count the number of Imagems
     * const count = await prisma.imagem.count({
     *   where: {
     *     // ... the filter for the Imagems we want to count
     *   }
     * })
    **/
    count<T extends ImagemCountArgs>(
      args?: Subset<T, ImagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagemAggregateArgs>(args: Subset<T, ImagemAggregateArgs>): Prisma.PrismaPromise<GetImagemAggregateType<T>>

    /**
     * Group by Imagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagemGroupByArgs['orderBy'] }
        : { orderBy?: ImagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagem model
   */
  readonly fields: ImagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicacao<T extends PublicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacaoDefaultArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Imagem model
   */
  interface ImagemFieldRefs {
    readonly id: FieldRef<"Imagem", 'Int'>
    readonly url: FieldRef<"Imagem", 'String'>
    readonly descricao: FieldRef<"Imagem", 'String'>
    readonly ordem: FieldRef<"Imagem", 'Int'>
    readonly criadoEm: FieldRef<"Imagem", 'DateTime'>
    readonly publicacaoId: FieldRef<"Imagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Imagem findUnique
   */
  export type ImagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem findUniqueOrThrow
   */
  export type ImagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem findFirst
   */
  export type ImagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagems.
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagems.
     */
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Imagem findFirstOrThrow
   */
  export type ImagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagem to fetch.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagems.
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagems.
     */
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Imagem findMany
   */
  export type ImagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter, which Imagems to fetch.
     */
    where?: ImagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagems to fetch.
     */
    orderBy?: ImagemOrderByWithRelationInput | ImagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagems.
     */
    cursor?: ImagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagems.
     */
    skip?: number
    distinct?: ImagemScalarFieldEnum | ImagemScalarFieldEnum[]
  }

  /**
   * Imagem create
   */
  export type ImagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Imagem.
     */
    data: XOR<ImagemCreateInput, ImagemUncheckedCreateInput>
  }

  /**
   * Imagem createMany
   */
  export type ImagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagems.
     */
    data: ImagemCreateManyInput | ImagemCreateManyInput[]
  }

  /**
   * Imagem createManyAndReturn
   */
  export type ImagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * The data used to create many Imagems.
     */
    data: ImagemCreateManyInput | ImagemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagem update
   */
  export type ImagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Imagem.
     */
    data: XOR<ImagemUpdateInput, ImagemUncheckedUpdateInput>
    /**
     * Choose, which Imagem to update.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem updateMany
   */
  export type ImagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagems.
     */
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyInput>
    /**
     * Filter which Imagems to update
     */
    where?: ImagemWhereInput
    /**
     * Limit how many Imagems to update.
     */
    limit?: number
  }

  /**
   * Imagem updateManyAndReturn
   */
  export type ImagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * The data used to update Imagems.
     */
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyInput>
    /**
     * Filter which Imagems to update
     */
    where?: ImagemWhereInput
    /**
     * Limit how many Imagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagem upsert
   */
  export type ImagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Imagem to update in case it exists.
     */
    where: ImagemWhereUniqueInput
    /**
     * In case the Imagem found by the `where` argument doesn't exist, create a new Imagem with this data.
     */
    create: XOR<ImagemCreateInput, ImagemUncheckedCreateInput>
    /**
     * In case the Imagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagemUpdateInput, ImagemUncheckedUpdateInput>
  }

  /**
   * Imagem delete
   */
  export type ImagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
    /**
     * Filter which Imagem to delete.
     */
    where: ImagemWhereUniqueInput
  }

  /**
   * Imagem deleteMany
   */
  export type ImagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagems to delete
     */
    where?: ImagemWhereInput
    /**
     * Limit how many Imagems to delete.
     */
    limit?: number
  }

  /**
   * Imagem without action
   */
  export type ImagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagem
     */
    select?: ImagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Imagem
     */
    omit?: ImagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagemInclude<ExtArgs> | null
  }


  /**
   * Model Comentario
   */

  export type AggregateComentario = {
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  export type ComentarioAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
    publicacaoId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    publicacaoId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    criadoEm: Date | null
    autorId: number | null
    publicacaoId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    criadoEm: Date | null
    autorId: number | null
    publicacaoId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    conteudo: number
    criadoEm: number
    autorId: number
    publicacaoId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    autorId?: true
    publicacaoId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    autorId?: true
    publicacaoId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    publicacaoId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    publicacaoId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    publicacaoId?: true
    _all?: true
  }

  export type ComentarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentario to aggregate.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentarioMaxAggregateInputType
  }

  export type GetComentarioAggregateType<T extends ComentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateComentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentario[P]>
      : GetScalarType<T[P], AggregateComentario[P]>
  }




  export type ComentarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
    orderBy?: ComentarioOrderByWithAggregationInput | ComentarioOrderByWithAggregationInput[]
    by: ComentarioScalarFieldEnum[] | ComentarioScalarFieldEnum
    having?: ComentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentarioCountAggregateInputType | true
    _avg?: ComentarioAvgAggregateInputType
    _sum?: ComentarioSumAggregateInputType
    _min?: ComentarioMinAggregateInputType
    _max?: ComentarioMaxAggregateInputType
  }

  export type ComentarioGroupByOutputType = {
    id: number
    conteudo: string
    criadoEm: Date
    autorId: number
    publicacaoId: number
    _count: ComentarioCountAggregateOutputType | null
    _avg: ComentarioAvgAggregateOutputType | null
    _sum: ComentarioSumAggregateOutputType | null
    _min: ComentarioMinAggregateOutputType | null
    _max: ComentarioMaxAggregateOutputType | null
  }

  type GetComentarioGroupByPayload<T extends ComentarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
            : GetScalarType<T[P], ComentarioGroupByOutputType[P]>
        }
      >
    >


  export type ComentarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    publicacaoId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    publicacaoId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    publicacaoId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    publicacaoId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "criadoEm" | "autorId" | "publicacaoId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      publicacao: Prisma.$PublicacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      criadoEm: Date
      autorId: number
      publicacaoId: number
    }, ExtArgs["result"]["comentario"]>
    composites: {}
  }

  type ComentarioGetPayload<S extends boolean | null | undefined | ComentarioDefaultArgs> = $Result.GetResult<Prisma.$ComentarioPayload, S>

  type ComentarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentarioCountAggregateInputType | true
    }

  export interface ComentarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentario'], meta: { name: 'Comentario' } }
    /**
     * Find zero or one Comentario that matches the filter.
     * @param {ComentarioFindUniqueArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentarioFindUniqueArgs>(args: SelectSubset<T, ComentarioFindUniqueArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentarioFindUniqueOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentarioFindFirstArgs>(args?: SelectSubset<T, ComentarioFindFirstArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindFirstOrThrowArgs} args - Arguments to find a Comentario
     * @example
     * // Get one Comentario
     * const comentario = await prisma.comentario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentario.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comentarioWithIdOnly = await prisma.comentario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComentarioFindManyArgs>(args?: SelectSubset<T, ComentarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentario.
     * @param {ComentarioCreateArgs} args - Arguments to create a Comentario.
     * @example
     * // Create one Comentario
     * const Comentario = await prisma.comentario.create({
     *   data: {
     *     // ... data to create a Comentario
     *   }
     * })
     * 
     */
    create<T extends ComentarioCreateArgs>(args: SelectSubset<T, ComentarioCreateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentarioCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentarioCreateManyArgs>(args?: SelectSubset<T, ComentarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comentarios and returns the data saved in the database.
     * @param {ComentarioCreateManyAndReturnArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentario = await prisma.comentario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComentarioCreateManyAndReturnArgs>(args?: SelectSubset<T, ComentarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comentario.
     * @param {ComentarioDeleteArgs} args - Arguments to delete one Comentario.
     * @example
     * // Delete one Comentario
     * const Comentario = await prisma.comentario.delete({
     *   where: {
     *     // ... filter to delete one Comentario
     *   }
     * })
     * 
     */
    delete<T extends ComentarioDeleteArgs>(args: SelectSubset<T, ComentarioDeleteArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentario.
     * @param {ComentarioUpdateArgs} args - Arguments to update one Comentario.
     * @example
     * // Update one Comentario
     * const comentario = await prisma.comentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentarioUpdateArgs>(args: SelectSubset<T, ComentarioUpdateArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentarioDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentarioDeleteManyArgs>(args?: SelectSubset<T, ComentarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentarioUpdateManyArgs>(args: SelectSubset<T, ComentarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios and returns the data updated in the database.
     * @param {ComentarioUpdateManyAndReturnArgs} args - Arguments to update many Comentarios.
     * @example
     * // Update many Comentarios
     * const comentario = await prisma.comentario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comentarios and only return the `id`
     * const comentarioWithIdOnly = await prisma.comentario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComentarioUpdateManyAndReturnArgs>(args: SelectSubset<T, ComentarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comentario.
     * @param {ComentarioUpsertArgs} args - Arguments to update or create a Comentario.
     * @example
     * // Update or create a Comentario
     * const comentario = await prisma.comentario.upsert({
     *   create: {
     *     // ... data to create a Comentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentario we want to update
     *   }
     * })
     */
    upsert<T extends ComentarioUpsertArgs>(args: SelectSubset<T, ComentarioUpsertArgs<ExtArgs>>): Prisma__ComentarioClient<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentario.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentarioCountArgs>(
      args?: Subset<T, ComentarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComentarioAggregateArgs>(args: Subset<T, ComentarioAggregateArgs>): Prisma.PrismaPromise<GetComentarioAggregateType<T>>

    /**
     * Group by Comentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentarioGroupByArgs['orderBy'] }
        : { orderBy?: ComentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentario model
   */
  readonly fields: ComentarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicacao<T extends PublicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacaoDefaultArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comentario model
   */
  interface ComentarioFieldRefs {
    readonly id: FieldRef<"Comentario", 'Int'>
    readonly conteudo: FieldRef<"Comentario", 'String'>
    readonly criadoEm: FieldRef<"Comentario", 'DateTime'>
    readonly autorId: FieldRef<"Comentario", 'Int'>
    readonly publicacaoId: FieldRef<"Comentario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comentario findUnique
   */
  export type ComentarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findUniqueOrThrow
   */
  export type ComentarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario findFirst
   */
  export type ComentarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findFirstOrThrow
   */
  export type ComentarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentario to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario findMany
   */
  export type ComentarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentarioOrderByWithRelationInput | ComentarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentarioScalarFieldEnum | ComentarioScalarFieldEnum[]
  }

  /**
   * Comentario create
   */
  export type ComentarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentario.
     */
    data: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
  }

  /**
   * Comentario createMany
   */
  export type ComentarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
  }

  /**
   * Comentario createManyAndReturn
   */
  export type ComentarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to create many Comentarios.
     */
    data: ComentarioCreateManyInput | ComentarioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario update
   */
  export type ComentarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentario.
     */
    data: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
    /**
     * Choose, which Comentario to update.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario updateMany
   */
  export type ComentarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentario updateManyAndReturn
   */
  export type ComentarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comentario upsert
   */
  export type ComentarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentario to update in case it exists.
     */
    where: ComentarioWhereUniqueInput
    /**
     * In case the Comentario found by the `where` argument doesn't exist, create a new Comentario with this data.
     */
    create: XOR<ComentarioCreateInput, ComentarioUncheckedCreateInput>
    /**
     * In case the Comentario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentarioUpdateInput, ComentarioUncheckedUpdateInput>
  }

  /**
   * Comentario delete
   */
  export type ComentarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
    /**
     * Filter which Comentario to delete.
     */
    where: ComentarioWhereUniqueInput
  }

  /**
   * Comentario deleteMany
   */
  export type ComentarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentarioWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentario without action
   */
  export type ComentarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentario
     */
    select?: ComentarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentario
     */
    omit?: ComentarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentarioInclude<ExtArgs> | null
  }


  /**
   * Model Curtida
   */

  export type AggregateCurtida = {
    _count: CurtidaCountAggregateOutputType | null
    _avg: CurtidaAvgAggregateOutputType | null
    _sum: CurtidaSumAggregateOutputType | null
    _min: CurtidaMinAggregateOutputType | null
    _max: CurtidaMaxAggregateOutputType | null
  }

  export type CurtidaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    publicacaoId: number | null
  }

  export type CurtidaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    publicacaoId: number | null
  }

  export type CurtidaMinAggregateOutputType = {
    id: number | null
    criadoEm: Date | null
    usuarioId: number | null
    publicacaoId: number | null
  }

  export type CurtidaMaxAggregateOutputType = {
    id: number | null
    criadoEm: Date | null
    usuarioId: number | null
    publicacaoId: number | null
  }

  export type CurtidaCountAggregateOutputType = {
    id: number
    criadoEm: number
    usuarioId: number
    publicacaoId: number
    _all: number
  }


  export type CurtidaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    publicacaoId?: true
  }

  export type CurtidaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    publicacaoId?: true
  }

  export type CurtidaMinAggregateInputType = {
    id?: true
    criadoEm?: true
    usuarioId?: true
    publicacaoId?: true
  }

  export type CurtidaMaxAggregateInputType = {
    id?: true
    criadoEm?: true
    usuarioId?: true
    publicacaoId?: true
  }

  export type CurtidaCountAggregateInputType = {
    id?: true
    criadoEm?: true
    usuarioId?: true
    publicacaoId?: true
    _all?: true
  }

  export type CurtidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curtida to aggregate.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curtidas
    **/
    _count?: true | CurtidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurtidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurtidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurtidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurtidaMaxAggregateInputType
  }

  export type GetCurtidaAggregateType<T extends CurtidaAggregateArgs> = {
        [P in keyof T & keyof AggregateCurtida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurtida[P]>
      : GetScalarType<T[P], AggregateCurtida[P]>
  }




  export type CurtidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
    orderBy?: CurtidaOrderByWithAggregationInput | CurtidaOrderByWithAggregationInput[]
    by: CurtidaScalarFieldEnum[] | CurtidaScalarFieldEnum
    having?: CurtidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurtidaCountAggregateInputType | true
    _avg?: CurtidaAvgAggregateInputType
    _sum?: CurtidaSumAggregateInputType
    _min?: CurtidaMinAggregateInputType
    _max?: CurtidaMaxAggregateInputType
  }

  export type CurtidaGroupByOutputType = {
    id: number
    criadoEm: Date
    usuarioId: number
    publicacaoId: number
    _count: CurtidaCountAggregateOutputType | null
    _avg: CurtidaAvgAggregateOutputType | null
    _sum: CurtidaSumAggregateOutputType | null
    _min: CurtidaMinAggregateOutputType | null
    _max: CurtidaMaxAggregateOutputType | null
  }

  type GetCurtidaGroupByPayload<T extends CurtidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurtidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurtidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurtidaGroupByOutputType[P]>
            : GetScalarType<T[P], CurtidaGroupByOutputType[P]>
        }
      >
    >


  export type CurtidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    publicacaoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    publicacaoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    publicacaoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectScalar = {
    id?: boolean
    criadoEm?: boolean
    usuarioId?: boolean
    publicacaoId?: boolean
  }

  export type CurtidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "criadoEm" | "usuarioId" | "publicacaoId", ExtArgs["result"]["curtida"]>
  export type CurtidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }
  export type CurtidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }
  export type CurtidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    publicacao?: boolean | PublicacaoDefaultArgs<ExtArgs>
  }

  export type $CurtidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curtida"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      publicacao: Prisma.$PublicacaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      criadoEm: Date
      usuarioId: number
      publicacaoId: number
    }, ExtArgs["result"]["curtida"]>
    composites: {}
  }

  type CurtidaGetPayload<S extends boolean | null | undefined | CurtidaDefaultArgs> = $Result.GetResult<Prisma.$CurtidaPayload, S>

  type CurtidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurtidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurtidaCountAggregateInputType | true
    }

  export interface CurtidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curtida'], meta: { name: 'Curtida' } }
    /**
     * Find zero or one Curtida that matches the filter.
     * @param {CurtidaFindUniqueArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurtidaFindUniqueArgs>(args: SelectSubset<T, CurtidaFindUniqueArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curtida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurtidaFindUniqueOrThrowArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurtidaFindUniqueOrThrowArgs>(args: SelectSubset<T, CurtidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curtida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaFindFirstArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurtidaFindFirstArgs>(args?: SelectSubset<T, CurtidaFindFirstArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curtida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaFindFirstOrThrowArgs} args - Arguments to find a Curtida
     * @example
     * // Get one Curtida
     * const curtida = await prisma.curtida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurtidaFindFirstOrThrowArgs>(args?: SelectSubset<T, CurtidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curtidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curtidas
     * const curtidas = await prisma.curtida.findMany()
     * 
     * // Get first 10 Curtidas
     * const curtidas = await prisma.curtida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curtidaWithIdOnly = await prisma.curtida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurtidaFindManyArgs>(args?: SelectSubset<T, CurtidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curtida.
     * @param {CurtidaCreateArgs} args - Arguments to create a Curtida.
     * @example
     * // Create one Curtida
     * const Curtida = await prisma.curtida.create({
     *   data: {
     *     // ... data to create a Curtida
     *   }
     * })
     * 
     */
    create<T extends CurtidaCreateArgs>(args: SelectSubset<T, CurtidaCreateArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curtidas.
     * @param {CurtidaCreateManyArgs} args - Arguments to create many Curtidas.
     * @example
     * // Create many Curtidas
     * const curtida = await prisma.curtida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurtidaCreateManyArgs>(args?: SelectSubset<T, CurtidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curtidas and returns the data saved in the database.
     * @param {CurtidaCreateManyAndReturnArgs} args - Arguments to create many Curtidas.
     * @example
     * // Create many Curtidas
     * const curtida = await prisma.curtida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curtidas and only return the `id`
     * const curtidaWithIdOnly = await prisma.curtida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurtidaCreateManyAndReturnArgs>(args?: SelectSubset<T, CurtidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curtida.
     * @param {CurtidaDeleteArgs} args - Arguments to delete one Curtida.
     * @example
     * // Delete one Curtida
     * const Curtida = await prisma.curtida.delete({
     *   where: {
     *     // ... filter to delete one Curtida
     *   }
     * })
     * 
     */
    delete<T extends CurtidaDeleteArgs>(args: SelectSubset<T, CurtidaDeleteArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curtida.
     * @param {CurtidaUpdateArgs} args - Arguments to update one Curtida.
     * @example
     * // Update one Curtida
     * const curtida = await prisma.curtida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurtidaUpdateArgs>(args: SelectSubset<T, CurtidaUpdateArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curtidas.
     * @param {CurtidaDeleteManyArgs} args - Arguments to filter Curtidas to delete.
     * @example
     * // Delete a few Curtidas
     * const { count } = await prisma.curtida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurtidaDeleteManyArgs>(args?: SelectSubset<T, CurtidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curtidas
     * const curtida = await prisma.curtida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurtidaUpdateManyArgs>(args: SelectSubset<T, CurtidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curtidas and returns the data updated in the database.
     * @param {CurtidaUpdateManyAndReturnArgs} args - Arguments to update many Curtidas.
     * @example
     * // Update many Curtidas
     * const curtida = await prisma.curtida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curtidas and only return the `id`
     * const curtidaWithIdOnly = await prisma.curtida.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurtidaUpdateManyAndReturnArgs>(args: SelectSubset<T, CurtidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curtida.
     * @param {CurtidaUpsertArgs} args - Arguments to update or create a Curtida.
     * @example
     * // Update or create a Curtida
     * const curtida = await prisma.curtida.upsert({
     *   create: {
     *     // ... data to create a Curtida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curtida we want to update
     *   }
     * })
     */
    upsert<T extends CurtidaUpsertArgs>(args: SelectSubset<T, CurtidaUpsertArgs<ExtArgs>>): Prisma__CurtidaClient<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curtidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaCountArgs} args - Arguments to filter Curtidas to count.
     * @example
     * // Count the number of Curtidas
     * const count = await prisma.curtida.count({
     *   where: {
     *     // ... the filter for the Curtidas we want to count
     *   }
     * })
    **/
    count<T extends CurtidaCountArgs>(
      args?: Subset<T, CurtidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurtidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curtida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurtidaAggregateArgs>(args: Subset<T, CurtidaAggregateArgs>): Prisma.PrismaPromise<GetCurtidaAggregateType<T>>

    /**
     * Group by Curtida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurtidaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurtidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurtidaGroupByArgs['orderBy'] }
        : { orderBy?: CurtidaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurtidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurtidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curtida model
   */
  readonly fields: CurtidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curtida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurtidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicacao<T extends PublicacaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacaoDefaultArgs<ExtArgs>>): Prisma__PublicacaoClient<$Result.GetResult<Prisma.$PublicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curtida model
   */
  interface CurtidaFieldRefs {
    readonly id: FieldRef<"Curtida", 'Int'>
    readonly criadoEm: FieldRef<"Curtida", 'DateTime'>
    readonly usuarioId: FieldRef<"Curtida", 'Int'>
    readonly publicacaoId: FieldRef<"Curtida", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Curtida findUnique
   */
  export type CurtidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida findUniqueOrThrow
   */
  export type CurtidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida findFirst
   */
  export type CurtidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curtidas.
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curtidas.
     */
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Curtida findFirstOrThrow
   */
  export type CurtidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtida to fetch.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curtidas.
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curtidas.
     */
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Curtida findMany
   */
  export type CurtidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter, which Curtidas to fetch.
     */
    where?: CurtidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curtidas to fetch.
     */
    orderBy?: CurtidaOrderByWithRelationInput | CurtidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curtidas.
     */
    cursor?: CurtidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curtidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curtidas.
     */
    skip?: number
    distinct?: CurtidaScalarFieldEnum | CurtidaScalarFieldEnum[]
  }

  /**
   * Curtida create
   */
  export type CurtidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Curtida.
     */
    data: XOR<CurtidaCreateInput, CurtidaUncheckedCreateInput>
  }

  /**
   * Curtida createMany
   */
  export type CurtidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Curtidas.
     */
    data: CurtidaCreateManyInput | CurtidaCreateManyInput[]
  }

  /**
   * Curtida createManyAndReturn
   */
  export type CurtidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * The data used to create many Curtidas.
     */
    data: CurtidaCreateManyInput | CurtidaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curtida update
   */
  export type CurtidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Curtida.
     */
    data: XOR<CurtidaUpdateInput, CurtidaUncheckedUpdateInput>
    /**
     * Choose, which Curtida to update.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida updateMany
   */
  export type CurtidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Curtidas.
     */
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyInput>
    /**
     * Filter which Curtidas to update
     */
    where?: CurtidaWhereInput
    /**
     * Limit how many Curtidas to update.
     */
    limit?: number
  }

  /**
   * Curtida updateManyAndReturn
   */
  export type CurtidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * The data used to update Curtidas.
     */
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyInput>
    /**
     * Filter which Curtidas to update
     */
    where?: CurtidaWhereInput
    /**
     * Limit how many Curtidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curtida upsert
   */
  export type CurtidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Curtida to update in case it exists.
     */
    where: CurtidaWhereUniqueInput
    /**
     * In case the Curtida found by the `where` argument doesn't exist, create a new Curtida with this data.
     */
    create: XOR<CurtidaCreateInput, CurtidaUncheckedCreateInput>
    /**
     * In case the Curtida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurtidaUpdateInput, CurtidaUncheckedUpdateInput>
  }

  /**
   * Curtida delete
   */
  export type CurtidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
    /**
     * Filter which Curtida to delete.
     */
    where: CurtidaWhereUniqueInput
  }

  /**
   * Curtida deleteMany
   */
  export type CurtidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curtidas to delete
     */
    where?: CurtidaWhereInput
    /**
     * Limit how many Curtidas to delete.
     */
    limit?: number
  }

  /**
   * Curtida without action
   */
  export type CurtidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curtida
     */
    select?: CurtidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curtida
     */
    omit?: CurtidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurtidaInclude<ExtArgs> | null
  }


  /**
   * Model Seguir
   */

  export type AggregateSeguir = {
    _count: SeguirCountAggregateOutputType | null
    _avg: SeguirAvgAggregateOutputType | null
    _sum: SeguirSumAggregateOutputType | null
    _min: SeguirMinAggregateOutputType | null
    _max: SeguirMaxAggregateOutputType | null
  }

  export type SeguirAvgAggregateOutputType = {
    seguidorId: number | null
    seguindoId: number | null
  }

  export type SeguirSumAggregateOutputType = {
    seguidorId: number | null
    seguindoId: number | null
  }

  export type SeguirMinAggregateOutputType = {
    seguidorId: number | null
    seguindoId: number | null
    criadoEm: Date | null
  }

  export type SeguirMaxAggregateOutputType = {
    seguidorId: number | null
    seguindoId: number | null
    criadoEm: Date | null
  }

  export type SeguirCountAggregateOutputType = {
    seguidorId: number
    seguindoId: number
    criadoEm: number
    _all: number
  }


  export type SeguirAvgAggregateInputType = {
    seguidorId?: true
    seguindoId?: true
  }

  export type SeguirSumAggregateInputType = {
    seguidorId?: true
    seguindoId?: true
  }

  export type SeguirMinAggregateInputType = {
    seguidorId?: true
    seguindoId?: true
    criadoEm?: true
  }

  export type SeguirMaxAggregateInputType = {
    seguidorId?: true
    seguindoId?: true
    criadoEm?: true
  }

  export type SeguirCountAggregateInputType = {
    seguidorId?: true
    seguindoId?: true
    criadoEm?: true
    _all?: true
  }

  export type SeguirAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguir to aggregate.
     */
    where?: SeguirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguirs to fetch.
     */
    orderBy?: SeguirOrderByWithRelationInput | SeguirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeguirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seguirs
    **/
    _count?: true | SeguirCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeguirAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeguirSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeguirMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeguirMaxAggregateInputType
  }

  export type GetSeguirAggregateType<T extends SeguirAggregateArgs> = {
        [P in keyof T & keyof AggregateSeguir]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeguir[P]>
      : GetScalarType<T[P], AggregateSeguir[P]>
  }




  export type SeguirGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeguirWhereInput
    orderBy?: SeguirOrderByWithAggregationInput | SeguirOrderByWithAggregationInput[]
    by: SeguirScalarFieldEnum[] | SeguirScalarFieldEnum
    having?: SeguirScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeguirCountAggregateInputType | true
    _avg?: SeguirAvgAggregateInputType
    _sum?: SeguirSumAggregateInputType
    _min?: SeguirMinAggregateInputType
    _max?: SeguirMaxAggregateInputType
  }

  export type SeguirGroupByOutputType = {
    seguidorId: number
    seguindoId: number
    criadoEm: Date
    _count: SeguirCountAggregateOutputType | null
    _avg: SeguirAvgAggregateOutputType | null
    _sum: SeguirSumAggregateOutputType | null
    _min: SeguirMinAggregateOutputType | null
    _max: SeguirMaxAggregateOutputType | null
  }

  type GetSeguirGroupByPayload<T extends SeguirGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeguirGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeguirGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeguirGroupByOutputType[P]>
            : GetScalarType<T[P], SeguirGroupByOutputType[P]>
        }
      >
    >


  export type SeguirSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seguidorId?: boolean
    seguindoId?: boolean
    criadoEm?: boolean
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguir"]>

  export type SeguirSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seguidorId?: boolean
    seguindoId?: boolean
    criadoEm?: boolean
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguir"]>

  export type SeguirSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    seguidorId?: boolean
    seguindoId?: boolean
    criadoEm?: boolean
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguir"]>

  export type SeguirSelectScalar = {
    seguidorId?: boolean
    seguindoId?: boolean
    criadoEm?: boolean
  }

  export type SeguirOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"seguidorId" | "seguindoId" | "criadoEm", ExtArgs["result"]["seguir"]>
  export type SeguirInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SeguirIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SeguirIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seguidor?: boolean | UsuarioDefaultArgs<ExtArgs>
    seguindo?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SeguirPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seguir"
    objects: {
      seguidor: Prisma.$UsuarioPayload<ExtArgs>
      seguindo: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      seguidorId: number
      seguindoId: number
      criadoEm: Date
    }, ExtArgs["result"]["seguir"]>
    composites: {}
  }

  type SeguirGetPayload<S extends boolean | null | undefined | SeguirDefaultArgs> = $Result.GetResult<Prisma.$SeguirPayload, S>

  type SeguirCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeguirFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeguirCountAggregateInputType | true
    }

  export interface SeguirDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seguir'], meta: { name: 'Seguir' } }
    /**
     * Find zero or one Seguir that matches the filter.
     * @param {SeguirFindUniqueArgs} args - Arguments to find a Seguir
     * @example
     * // Get one Seguir
     * const seguir = await prisma.seguir.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeguirFindUniqueArgs>(args: SelectSubset<T, SeguirFindUniqueArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seguir that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeguirFindUniqueOrThrowArgs} args - Arguments to find a Seguir
     * @example
     * // Get one Seguir
     * const seguir = await prisma.seguir.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeguirFindUniqueOrThrowArgs>(args: SelectSubset<T, SeguirFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguir that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirFindFirstArgs} args - Arguments to find a Seguir
     * @example
     * // Get one Seguir
     * const seguir = await prisma.seguir.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeguirFindFirstArgs>(args?: SelectSubset<T, SeguirFindFirstArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seguir that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirFindFirstOrThrowArgs} args - Arguments to find a Seguir
     * @example
     * // Get one Seguir
     * const seguir = await prisma.seguir.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeguirFindFirstOrThrowArgs>(args?: SelectSubset<T, SeguirFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seguirs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seguirs
     * const seguirs = await prisma.seguir.findMany()
     * 
     * // Get first 10 Seguirs
     * const seguirs = await prisma.seguir.findMany({ take: 10 })
     * 
     * // Only select the `seguidorId`
     * const seguirWithSeguidorIdOnly = await prisma.seguir.findMany({ select: { seguidorId: true } })
     * 
     */
    findMany<T extends SeguirFindManyArgs>(args?: SelectSubset<T, SeguirFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seguir.
     * @param {SeguirCreateArgs} args - Arguments to create a Seguir.
     * @example
     * // Create one Seguir
     * const Seguir = await prisma.seguir.create({
     *   data: {
     *     // ... data to create a Seguir
     *   }
     * })
     * 
     */
    create<T extends SeguirCreateArgs>(args: SelectSubset<T, SeguirCreateArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seguirs.
     * @param {SeguirCreateManyArgs} args - Arguments to create many Seguirs.
     * @example
     * // Create many Seguirs
     * const seguir = await prisma.seguir.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeguirCreateManyArgs>(args?: SelectSubset<T, SeguirCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seguirs and returns the data saved in the database.
     * @param {SeguirCreateManyAndReturnArgs} args - Arguments to create many Seguirs.
     * @example
     * // Create many Seguirs
     * const seguir = await prisma.seguir.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seguirs and only return the `seguidorId`
     * const seguirWithSeguidorIdOnly = await prisma.seguir.createManyAndReturn({
     *   select: { seguidorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeguirCreateManyAndReturnArgs>(args?: SelectSubset<T, SeguirCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seguir.
     * @param {SeguirDeleteArgs} args - Arguments to delete one Seguir.
     * @example
     * // Delete one Seguir
     * const Seguir = await prisma.seguir.delete({
     *   where: {
     *     // ... filter to delete one Seguir
     *   }
     * })
     * 
     */
    delete<T extends SeguirDeleteArgs>(args: SelectSubset<T, SeguirDeleteArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seguir.
     * @param {SeguirUpdateArgs} args - Arguments to update one Seguir.
     * @example
     * // Update one Seguir
     * const seguir = await prisma.seguir.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeguirUpdateArgs>(args: SelectSubset<T, SeguirUpdateArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seguirs.
     * @param {SeguirDeleteManyArgs} args - Arguments to filter Seguirs to delete.
     * @example
     * // Delete a few Seguirs
     * const { count } = await prisma.seguir.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeguirDeleteManyArgs>(args?: SelectSubset<T, SeguirDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seguirs
     * const seguir = await prisma.seguir.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeguirUpdateManyArgs>(args: SelectSubset<T, SeguirUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguirs and returns the data updated in the database.
     * @param {SeguirUpdateManyAndReturnArgs} args - Arguments to update many Seguirs.
     * @example
     * // Update many Seguirs
     * const seguir = await prisma.seguir.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seguirs and only return the `seguidorId`
     * const seguirWithSeguidorIdOnly = await prisma.seguir.updateManyAndReturn({
     *   select: { seguidorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeguirUpdateManyAndReturnArgs>(args: SelectSubset<T, SeguirUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seguir.
     * @param {SeguirUpsertArgs} args - Arguments to update or create a Seguir.
     * @example
     * // Update or create a Seguir
     * const seguir = await prisma.seguir.upsert({
     *   create: {
     *     // ... data to create a Seguir
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seguir we want to update
     *   }
     * })
     */
    upsert<T extends SeguirUpsertArgs>(args: SelectSubset<T, SeguirUpsertArgs<ExtArgs>>): Prisma__SeguirClient<$Result.GetResult<Prisma.$SeguirPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seguirs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirCountArgs} args - Arguments to filter Seguirs to count.
     * @example
     * // Count the number of Seguirs
     * const count = await prisma.seguir.count({
     *   where: {
     *     // ... the filter for the Seguirs we want to count
     *   }
     * })
    **/
    count<T extends SeguirCountArgs>(
      args?: Subset<T, SeguirCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeguirCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seguir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeguirAggregateArgs>(args: Subset<T, SeguirAggregateArgs>): Prisma.PrismaPromise<GetSeguirAggregateType<T>>

    /**
     * Group by Seguir.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeguirGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeguirGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeguirGroupByArgs['orderBy'] }
        : { orderBy?: SeguirGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeguirGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguirGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seguir model
   */
  readonly fields: SeguirFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seguir.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeguirClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seguidor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seguindo<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seguir model
   */
  interface SeguirFieldRefs {
    readonly seguidorId: FieldRef<"Seguir", 'Int'>
    readonly seguindoId: FieldRef<"Seguir", 'Int'>
    readonly criadoEm: FieldRef<"Seguir", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seguir findUnique
   */
  export type SeguirFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * Filter, which Seguir to fetch.
     */
    where: SeguirWhereUniqueInput
  }

  /**
   * Seguir findUniqueOrThrow
   */
  export type SeguirFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * Filter, which Seguir to fetch.
     */
    where: SeguirWhereUniqueInput
  }

  /**
   * Seguir findFirst
   */
  export type SeguirFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * Filter, which Seguir to fetch.
     */
    where?: SeguirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguirs to fetch.
     */
    orderBy?: SeguirOrderByWithRelationInput | SeguirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguirs.
     */
    cursor?: SeguirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguirs.
     */
    distinct?: SeguirScalarFieldEnum | SeguirScalarFieldEnum[]
  }

  /**
   * Seguir findFirstOrThrow
   */
  export type SeguirFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * Filter, which Seguir to fetch.
     */
    where?: SeguirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguirs to fetch.
     */
    orderBy?: SeguirOrderByWithRelationInput | SeguirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seguirs.
     */
    cursor?: SeguirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguirs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seguirs.
     */
    distinct?: SeguirScalarFieldEnum | SeguirScalarFieldEnum[]
  }

  /**
   * Seguir findMany
   */
  export type SeguirFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * Filter, which Seguirs to fetch.
     */
    where?: SeguirWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seguirs to fetch.
     */
    orderBy?: SeguirOrderByWithRelationInput | SeguirOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seguirs.
     */
    cursor?: SeguirWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seguirs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seguirs.
     */
    skip?: number
    distinct?: SeguirScalarFieldEnum | SeguirScalarFieldEnum[]
  }

  /**
   * Seguir create
   */
  export type SeguirCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * The data needed to create a Seguir.
     */
    data: XOR<SeguirCreateInput, SeguirUncheckedCreateInput>
  }

  /**
   * Seguir createMany
   */
  export type SeguirCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seguirs.
     */
    data: SeguirCreateManyInput | SeguirCreateManyInput[]
  }

  /**
   * Seguir createManyAndReturn
   */
  export type SeguirCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * The data used to create many Seguirs.
     */
    data: SeguirCreateManyInput | SeguirCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguir update
   */
  export type SeguirUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * The data needed to update a Seguir.
     */
    data: XOR<SeguirUpdateInput, SeguirUncheckedUpdateInput>
    /**
     * Choose, which Seguir to update.
     */
    where: SeguirWhereUniqueInput
  }

  /**
   * Seguir updateMany
   */
  export type SeguirUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seguirs.
     */
    data: XOR<SeguirUpdateManyMutationInput, SeguirUncheckedUpdateManyInput>
    /**
     * Filter which Seguirs to update
     */
    where?: SeguirWhereInput
    /**
     * Limit how many Seguirs to update.
     */
    limit?: number
  }

  /**
   * Seguir updateManyAndReturn
   */
  export type SeguirUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * The data used to update Seguirs.
     */
    data: XOR<SeguirUpdateManyMutationInput, SeguirUncheckedUpdateManyInput>
    /**
     * Filter which Seguirs to update
     */
    where?: SeguirWhereInput
    /**
     * Limit how many Seguirs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seguir upsert
   */
  export type SeguirUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * The filter to search for the Seguir to update in case it exists.
     */
    where: SeguirWhereUniqueInput
    /**
     * In case the Seguir found by the `where` argument doesn't exist, create a new Seguir with this data.
     */
    create: XOR<SeguirCreateInput, SeguirUncheckedCreateInput>
    /**
     * In case the Seguir was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeguirUpdateInput, SeguirUncheckedUpdateInput>
  }

  /**
   * Seguir delete
   */
  export type SeguirDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
    /**
     * Filter which Seguir to delete.
     */
    where: SeguirWhereUniqueInput
  }

  /**
   * Seguir deleteMany
   */
  export type SeguirDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seguirs to delete
     */
    where?: SeguirWhereInput
    /**
     * Limit how many Seguirs to delete.
     */
    limit?: number
  }

  /**
   * Seguir without action
   */
  export type SeguirDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seguir
     */
    select?: SeguirSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seguir
     */
    omit?: SeguirOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeguirInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nomeUsuario: 'nomeUsuario',
    email: 'email',
    senhaHash: 'senhaHash',
    biografia: 'biografia',
    urlFotoPerfil: 'urlFotoPerfil',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PublicacaoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    criadoEm: 'criadoEm',
    categoria: 'categoria',
    autorId: 'autorId'
  };

  export type PublicacaoScalarFieldEnum = (typeof PublicacaoScalarFieldEnum)[keyof typeof PublicacaoScalarFieldEnum]


  export const ImagemScalarFieldEnum: {
    id: 'id',
    url: 'url',
    descricao: 'descricao',
    ordem: 'ordem',
    criadoEm: 'criadoEm',
    publicacaoId: 'publicacaoId'
  };

  export type ImagemScalarFieldEnum = (typeof ImagemScalarFieldEnum)[keyof typeof ImagemScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    criadoEm: 'criadoEm',
    autorId: 'autorId',
    publicacaoId: 'publicacaoId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const CurtidaScalarFieldEnum: {
    id: 'id',
    criadoEm: 'criadoEm',
    usuarioId: 'usuarioId',
    publicacaoId: 'publicacaoId'
  };

  export type CurtidaScalarFieldEnum = (typeof CurtidaScalarFieldEnum)[keyof typeof CurtidaScalarFieldEnum]


  export const SeguirScalarFieldEnum: {
    seguidorId: 'seguidorId',
    seguindoId: 'seguindoId',
    criadoEm: 'criadoEm'
  };

  export type SeguirScalarFieldEnum = (typeof SeguirScalarFieldEnum)[keyof typeof SeguirScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nomeUsuario?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senhaHash?: StringFilter<"Usuario"> | string
    biografia?: StringNullableFilter<"Usuario"> | string | null
    urlFotoPerfil?: StringNullableFilter<"Usuario"> | string | null
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    publicacoes?: PublicacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
    seguindo?: SeguirListRelationFilter
    seguidores?: SeguirListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrderInput | SortOrder
    urlFotoPerfil?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    publicacoes?: PublicacaoOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaOrderByRelationAggregateInput
    seguindo?: SeguirOrderByRelationAggregateInput
    seguidores?: SeguirOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomeUsuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senhaHash?: StringFilter<"Usuario"> | string
    biografia?: StringNullableFilter<"Usuario"> | string | null
    urlFotoPerfil?: StringNullableFilter<"Usuario"> | string | null
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Usuario"> | Date | string
    publicacoes?: PublicacaoListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
    seguindo?: SeguirListRelationFilter
    seguidores?: SeguirListRelationFilter
  }, "id" | "nomeUsuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrderInput | SortOrder
    urlFotoPerfil?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nomeUsuario?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senhaHash?: StringWithAggregatesFilter<"Usuario"> | string
    biografia?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    urlFotoPerfil?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PublicacaoWhereInput = {
    AND?: PublicacaoWhereInput | PublicacaoWhereInput[]
    OR?: PublicacaoWhereInput[]
    NOT?: PublicacaoWhereInput | PublicacaoWhereInput[]
    id?: IntFilter<"Publicacao"> | number
    titulo?: StringFilter<"Publicacao"> | string
    conteudo?: StringFilter<"Publicacao"> | string
    criadoEm?: DateTimeFilter<"Publicacao"> | Date | string
    categoria?: StringNullableFilter<"Publicacao"> | string | null
    autorId?: IntFilter<"Publicacao"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
    imagens?: ImagemListRelationFilter
  }

  export type PublicacaoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    categoria?: SortOrderInput | SortOrder
    autorId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaOrderByRelationAggregateInput
    imagens?: ImagemOrderByRelationAggregateInput
  }

  export type PublicacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicacaoWhereInput | PublicacaoWhereInput[]
    OR?: PublicacaoWhereInput[]
    NOT?: PublicacaoWhereInput | PublicacaoWhereInput[]
    titulo?: StringFilter<"Publicacao"> | string
    conteudo?: StringFilter<"Publicacao"> | string
    criadoEm?: DateTimeFilter<"Publicacao"> | Date | string
    categoria?: StringNullableFilter<"Publicacao"> | string | null
    autorId?: IntFilter<"Publicacao"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
    imagens?: ImagemListRelationFilter
  }, "id">

  export type PublicacaoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    categoria?: SortOrderInput | SortOrder
    autorId?: SortOrder
    _count?: PublicacaoCountOrderByAggregateInput
    _avg?: PublicacaoAvgOrderByAggregateInput
    _max?: PublicacaoMaxOrderByAggregateInput
    _min?: PublicacaoMinOrderByAggregateInput
    _sum?: PublicacaoSumOrderByAggregateInput
  }

  export type PublicacaoScalarWhereWithAggregatesInput = {
    AND?: PublicacaoScalarWhereWithAggregatesInput | PublicacaoScalarWhereWithAggregatesInput[]
    OR?: PublicacaoScalarWhereWithAggregatesInput[]
    NOT?: PublicacaoScalarWhereWithAggregatesInput | PublicacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publicacao"> | number
    titulo?: StringWithAggregatesFilter<"Publicacao"> | string
    conteudo?: StringWithAggregatesFilter<"Publicacao"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Publicacao"> | Date | string
    categoria?: StringNullableWithAggregatesFilter<"Publicacao"> | string | null
    autorId?: IntWithAggregatesFilter<"Publicacao"> | number
  }

  export type ImagemWhereInput = {
    AND?: ImagemWhereInput | ImagemWhereInput[]
    OR?: ImagemWhereInput[]
    NOT?: ImagemWhereInput | ImagemWhereInput[]
    id?: IntFilter<"Imagem"> | number
    url?: StringFilter<"Imagem"> | string
    descricao?: StringNullableFilter<"Imagem"> | string | null
    ordem?: IntNullableFilter<"Imagem"> | number | null
    criadoEm?: DateTimeFilter<"Imagem"> | Date | string
    publicacaoId?: IntFilter<"Imagem"> | number
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
  }

  export type ImagemOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    publicacaoId?: SortOrder
    publicacao?: PublicacaoOrderByWithRelationInput
  }

  export type ImagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagemWhereInput | ImagemWhereInput[]
    OR?: ImagemWhereInput[]
    NOT?: ImagemWhereInput | ImagemWhereInput[]
    url?: StringFilter<"Imagem"> | string
    descricao?: StringNullableFilter<"Imagem"> | string | null
    ordem?: IntNullableFilter<"Imagem"> | number | null
    criadoEm?: DateTimeFilter<"Imagem"> | Date | string
    publicacaoId?: IntFilter<"Imagem"> | number
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
  }, "id">

  export type ImagemOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    publicacaoId?: SortOrder
    _count?: ImagemCountOrderByAggregateInput
    _avg?: ImagemAvgOrderByAggregateInput
    _max?: ImagemMaxOrderByAggregateInput
    _min?: ImagemMinOrderByAggregateInput
    _sum?: ImagemSumOrderByAggregateInput
  }

  export type ImagemScalarWhereWithAggregatesInput = {
    AND?: ImagemScalarWhereWithAggregatesInput | ImagemScalarWhereWithAggregatesInput[]
    OR?: ImagemScalarWhereWithAggregatesInput[]
    NOT?: ImagemScalarWhereWithAggregatesInput | ImagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Imagem"> | number
    url?: StringWithAggregatesFilter<"Imagem"> | string
    descricao?: StringNullableWithAggregatesFilter<"Imagem"> | string | null
    ordem?: IntNullableWithAggregatesFilter<"Imagem"> | number | null
    criadoEm?: DateTimeWithAggregatesFilter<"Imagem"> | Date | string
    publicacaoId?: IntWithAggregatesFilter<"Imagem"> | number
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    publicacaoId?: IntFilter<"Comentario"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    publicacao?: PublicacaoOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    publicacaoId?: IntFilter<"Comentario"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
    _count?: ComentarioCountOrderByAggregateInput
    _avg?: ComentarioAvgOrderByAggregateInput
    _max?: ComentarioMaxOrderByAggregateInput
    _min?: ComentarioMinOrderByAggregateInput
    _sum?: ComentarioSumOrderByAggregateInput
  }

  export type ComentarioScalarWhereWithAggregatesInput = {
    AND?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    OR?: ComentarioScalarWhereWithAggregatesInput[]
    NOT?: ComentarioScalarWhereWithAggregatesInput | ComentarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comentario"> | number
    conteudo?: StringWithAggregatesFilter<"Comentario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Comentario"> | Date | string
    autorId?: IntWithAggregatesFilter<"Comentario"> | number
    publicacaoId?: IntWithAggregatesFilter<"Comentario"> | number
  }

  export type CurtidaWhereInput = {
    AND?: CurtidaWhereInput | CurtidaWhereInput[]
    OR?: CurtidaWhereInput[]
    NOT?: CurtidaWhereInput | CurtidaWhereInput[]
    id?: IntFilter<"Curtida"> | number
    criadoEm?: DateTimeFilter<"Curtida"> | Date | string
    usuarioId?: IntFilter<"Curtida"> | number
    publicacaoId?: IntFilter<"Curtida"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
  }

  export type CurtidaOrderByWithRelationInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    publicacao?: PublicacaoOrderByWithRelationInput
  }

  export type CurtidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_publicacaoId?: CurtidaUsuarioIdPublicacaoIdCompoundUniqueInput
    AND?: CurtidaWhereInput | CurtidaWhereInput[]
    OR?: CurtidaWhereInput[]
    NOT?: CurtidaWhereInput | CurtidaWhereInput[]
    criadoEm?: DateTimeFilter<"Curtida"> | Date | string
    usuarioId?: IntFilter<"Curtida"> | number
    publicacaoId?: IntFilter<"Curtida"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    publicacao?: XOR<PublicacaoScalarRelationFilter, PublicacaoWhereInput>
  }, "id" | "usuarioId_publicacaoId">

  export type CurtidaOrderByWithAggregationInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
    _count?: CurtidaCountOrderByAggregateInput
    _avg?: CurtidaAvgOrderByAggregateInput
    _max?: CurtidaMaxOrderByAggregateInput
    _min?: CurtidaMinOrderByAggregateInput
    _sum?: CurtidaSumOrderByAggregateInput
  }

  export type CurtidaScalarWhereWithAggregatesInput = {
    AND?: CurtidaScalarWhereWithAggregatesInput | CurtidaScalarWhereWithAggregatesInput[]
    OR?: CurtidaScalarWhereWithAggregatesInput[]
    NOT?: CurtidaScalarWhereWithAggregatesInput | CurtidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curtida"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Curtida"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Curtida"> | number
    publicacaoId?: IntWithAggregatesFilter<"Curtida"> | number
  }

  export type SeguirWhereInput = {
    AND?: SeguirWhereInput | SeguirWhereInput[]
    OR?: SeguirWhereInput[]
    NOT?: SeguirWhereInput | SeguirWhereInput[]
    seguidorId?: IntFilter<"Seguir"> | number
    seguindoId?: IntFilter<"Seguir"> | number
    criadoEm?: DateTimeFilter<"Seguir"> | Date | string
    seguidor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seguindo?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SeguirOrderByWithRelationInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    criadoEm?: SortOrder
    seguidor?: UsuarioOrderByWithRelationInput
    seguindo?: UsuarioOrderByWithRelationInput
  }

  export type SeguirWhereUniqueInput = Prisma.AtLeast<{
    seguidorId_seguindoId?: SeguirSeguidorIdSeguindoIdCompoundUniqueInput
    AND?: SeguirWhereInput | SeguirWhereInput[]
    OR?: SeguirWhereInput[]
    NOT?: SeguirWhereInput | SeguirWhereInput[]
    seguidorId?: IntFilter<"Seguir"> | number
    seguindoId?: IntFilter<"Seguir"> | number
    criadoEm?: DateTimeFilter<"Seguir"> | Date | string
    seguidor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    seguindo?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "seguidorId_seguindoId">

  export type SeguirOrderByWithAggregationInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    criadoEm?: SortOrder
    _count?: SeguirCountOrderByAggregateInput
    _avg?: SeguirAvgOrderByAggregateInput
    _max?: SeguirMaxOrderByAggregateInput
    _min?: SeguirMinOrderByAggregateInput
    _sum?: SeguirSumOrderByAggregateInput
  }

  export type SeguirScalarWhereWithAggregatesInput = {
    AND?: SeguirScalarWhereWithAggregatesInput | SeguirScalarWhereWithAggregatesInput[]
    OR?: SeguirScalarWhereWithAggregatesInput[]
    NOT?: SeguirScalarWhereWithAggregatesInput | SeguirScalarWhereWithAggregatesInput[]
    seguidorId?: IntWithAggregatesFilter<"Seguir"> | number
    seguindoId?: IntWithAggregatesFilter<"Seguir"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Seguir"> | Date | string
  }

  export type UsuarioCreateInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirUncheckedCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUpdateInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUncheckedUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacaoCreateInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPublicacoesInput
    comentarios?: ComentarioCreateNestedManyWithoutPublicacaoInput
    curtidas?: CurtidaCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPublicacaoInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPublicacoesNestedInput
    comentarios?: ComentarioUpdateManyWithoutPublicacaoNestedInput
    curtidas?: CurtidaUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPublicacaoNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoCreateManyInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autorId: number
  }

  export type PublicacaoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PublicacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateInput = {
    url: string
    descricao?: string | null
    ordem?: number | null
    criadoEm?: Date | string
    publicacao: PublicacaoCreateNestedOneWithoutImagensInput
  }

  export type ImagemUncheckedCreateInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number | null
    criadoEm?: Date | string
    publicacaoId: number
  }

  export type ImagemUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacao?: PublicacaoUpdateOneRequiredWithoutImagensNestedInput
  }

  export type ImagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateManyInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number | null
    criadoEm?: Date | string
    publicacaoId: number
  }

  export type ImagemUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    publicacao: PublicacaoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    publicacaoId: number
  }

  export type ComentarioUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    publicacao?: PublicacaoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    publicacaoId: number
  }

  export type ComentarioUpdateManyMutationInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaCreateInput = {
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasInput
    publicacao: PublicacaoCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
    publicacaoId: number
  }

  export type CurtidaUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasNestedInput
    publicacao?: PublicacaoUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaCreateManyInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
    publicacaoId: number
  }

  export type CurtidaUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurtidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type SeguirCreateInput = {
    criadoEm?: Date | string
    seguidor: UsuarioCreateNestedOneWithoutSeguindoInput
    seguindo: UsuarioCreateNestedOneWithoutSeguidoresInput
  }

  export type SeguirUncheckedCreateInput = {
    seguidorId: number
    seguindoId: number
    criadoEm?: Date | string
  }

  export type SeguirUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    seguidor?: UsuarioUpdateOneRequiredWithoutSeguindoNestedInput
    seguindo?: UsuarioUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type SeguirUncheckedUpdateInput = {
    seguidorId?: IntFieldUpdateOperationsInput | number
    seguindoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguirCreateManyInput = {
    seguidorId: number
    seguindoId: number
    criadoEm?: Date | string
  }

  export type SeguirUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguirUncheckedUpdateManyInput = {
    seguidorId?: IntFieldUpdateOperationsInput | number
    seguindoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PublicacaoListRelationFilter = {
    every?: PublicacaoWhereInput
    some?: PublicacaoWhereInput
    none?: PublicacaoWhereInput
  }

  export type ComentarioListRelationFilter = {
    every?: ComentarioWhereInput
    some?: ComentarioWhereInput
    none?: ComentarioWhereInput
  }

  export type CurtidaListRelationFilter = {
    every?: CurtidaWhereInput
    some?: CurtidaWhereInput
    none?: CurtidaWhereInput
  }

  export type SeguirListRelationFilter = {
    every?: SeguirWhereInput
    some?: SeguirWhereInput
    none?: SeguirWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PublicacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurtidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeguirOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrder
    urlFotoPerfil?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrder
    urlFotoPerfil?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    biografia?: SortOrder
    urlFotoPerfil?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ImagemListRelationFilter = {
    every?: ImagemWhereInput
    some?: ImagemWhereInput
    none?: ImagemWhereInput
  }

  export type ImagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicacaoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    categoria?: SortOrder
    autorId?: SortOrder
  }

  export type PublicacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
  }

  export type PublicacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    categoria?: SortOrder
    autorId?: SortOrder
  }

  export type PublicacaoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    categoria?: SortOrder
    autorId?: SortOrder
  }

  export type PublicacaoSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PublicacaoScalarRelationFilter = {
    is?: PublicacaoWhereInput
    isNot?: PublicacaoWhereInput
  }

  export type ImagemCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    criadoEm?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ImagemAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ImagemMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    criadoEm?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ImagemMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    criadoEm?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ImagemSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    publicacaoId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type CurtidaUsuarioIdPublicacaoIdCompoundUniqueInput = {
    usuarioId: number
    publicacaoId: number
  }

  export type CurtidaCountOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type CurtidaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type CurtidaMaxOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type CurtidaMinOrderByAggregateInput = {
    id?: SortOrder
    criadoEm?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type CurtidaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    publicacaoId?: SortOrder
  }

  export type SeguirSeguidorIdSeguindoIdCompoundUniqueInput = {
    seguidorId: number
    seguindoId: number
  }

  export type SeguirCountOrderByAggregateInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type SeguirAvgOrderByAggregateInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type SeguirMaxOrderByAggregateInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type SeguirMinOrderByAggregateInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type SeguirSumOrderByAggregateInput = {
    seguidorId?: SortOrder
    seguindoId?: SortOrder
  }

  export type PublicacaoCreateNestedManyWithoutAutorInput = {
    create?: XOR<PublicacaoCreateWithoutAutorInput, PublicacaoUncheckedCreateWithoutAutorInput> | PublicacaoCreateWithoutAutorInput[] | PublicacaoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PublicacaoCreateOrConnectWithoutAutorInput | PublicacaoCreateOrConnectWithoutAutorInput[]
    createMany?: PublicacaoCreateManyAutorInputEnvelope
    connect?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type SeguirCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<SeguirCreateWithoutSeguidorInput, SeguirUncheckedCreateWithoutSeguidorInput> | SeguirCreateWithoutSeguidorInput[] | SeguirUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguidorInput | SeguirCreateOrConnectWithoutSeguidorInput[]
    createMany?: SeguirCreateManySeguidorInputEnvelope
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
  }

  export type SeguirCreateNestedManyWithoutSeguindoInput = {
    create?: XOR<SeguirCreateWithoutSeguindoInput, SeguirUncheckedCreateWithoutSeguindoInput> | SeguirCreateWithoutSeguindoInput[] | SeguirUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguindoInput | SeguirCreateOrConnectWithoutSeguindoInput[]
    createMany?: SeguirCreateManySeguindoInputEnvelope
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
  }

  export type PublicacaoUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<PublicacaoCreateWithoutAutorInput, PublicacaoUncheckedCreateWithoutAutorInput> | PublicacaoCreateWithoutAutorInput[] | PublicacaoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PublicacaoCreateOrConnectWithoutAutorInput | PublicacaoCreateOrConnectWithoutAutorInput[]
    createMany?: PublicacaoCreateManyAutorInputEnvelope
    connect?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type SeguirUncheckedCreateNestedManyWithoutSeguidorInput = {
    create?: XOR<SeguirCreateWithoutSeguidorInput, SeguirUncheckedCreateWithoutSeguidorInput> | SeguirCreateWithoutSeguidorInput[] | SeguirUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguidorInput | SeguirCreateOrConnectWithoutSeguidorInput[]
    createMany?: SeguirCreateManySeguidorInputEnvelope
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
  }

  export type SeguirUncheckedCreateNestedManyWithoutSeguindoInput = {
    create?: XOR<SeguirCreateWithoutSeguindoInput, SeguirUncheckedCreateWithoutSeguindoInput> | SeguirCreateWithoutSeguindoInput[] | SeguirUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguindoInput | SeguirCreateOrConnectWithoutSeguindoInput[]
    createMany?: SeguirCreateManySeguindoInputEnvelope
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PublicacaoUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PublicacaoCreateWithoutAutorInput, PublicacaoUncheckedCreateWithoutAutorInput> | PublicacaoCreateWithoutAutorInput[] | PublicacaoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PublicacaoCreateOrConnectWithoutAutorInput | PublicacaoCreateOrConnectWithoutAutorInput[]
    upsert?: PublicacaoUpsertWithWhereUniqueWithoutAutorInput | PublicacaoUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PublicacaoCreateManyAutorInputEnvelope
    set?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    disconnect?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    delete?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    connect?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    update?: PublicacaoUpdateWithWhereUniqueWithoutAutorInput | PublicacaoUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PublicacaoUpdateManyWithWhereWithoutAutorInput | PublicacaoUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PublicacaoScalarWhereInput | PublicacaoScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAutorInput | ComentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAutorInput | ComentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAutorInput | ComentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutUsuarioInput | CurtidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type SeguirUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<SeguirCreateWithoutSeguidorInput, SeguirUncheckedCreateWithoutSeguidorInput> | SeguirCreateWithoutSeguidorInput[] | SeguirUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguidorInput | SeguirCreateOrConnectWithoutSeguidorInput[]
    upsert?: SeguirUpsertWithWhereUniqueWithoutSeguidorInput | SeguirUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: SeguirCreateManySeguidorInputEnvelope
    set?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    disconnect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    delete?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    update?: SeguirUpdateWithWhereUniqueWithoutSeguidorInput | SeguirUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: SeguirUpdateManyWithWhereWithoutSeguidorInput | SeguirUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: SeguirScalarWhereInput | SeguirScalarWhereInput[]
  }

  export type SeguirUpdateManyWithoutSeguindoNestedInput = {
    create?: XOR<SeguirCreateWithoutSeguindoInput, SeguirUncheckedCreateWithoutSeguindoInput> | SeguirCreateWithoutSeguindoInput[] | SeguirUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguindoInput | SeguirCreateOrConnectWithoutSeguindoInput[]
    upsert?: SeguirUpsertWithWhereUniqueWithoutSeguindoInput | SeguirUpsertWithWhereUniqueWithoutSeguindoInput[]
    createMany?: SeguirCreateManySeguindoInputEnvelope
    set?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    disconnect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    delete?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    update?: SeguirUpdateWithWhereUniqueWithoutSeguindoInput | SeguirUpdateWithWhereUniqueWithoutSeguindoInput[]
    updateMany?: SeguirUpdateManyWithWhereWithoutSeguindoInput | SeguirUpdateManyWithWhereWithoutSeguindoInput[]
    deleteMany?: SeguirScalarWhereInput | SeguirScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PublicacaoUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PublicacaoCreateWithoutAutorInput, PublicacaoUncheckedCreateWithoutAutorInput> | PublicacaoCreateWithoutAutorInput[] | PublicacaoUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PublicacaoCreateOrConnectWithoutAutorInput | PublicacaoCreateOrConnectWithoutAutorInput[]
    upsert?: PublicacaoUpsertWithWhereUniqueWithoutAutorInput | PublicacaoUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PublicacaoCreateManyAutorInputEnvelope
    set?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    disconnect?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    delete?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    connect?: PublicacaoWhereUniqueInput | PublicacaoWhereUniqueInput[]
    update?: PublicacaoUpdateWithWhereUniqueWithoutAutorInput | PublicacaoUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PublicacaoUpdateManyWithWhereWithoutAutorInput | PublicacaoUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PublicacaoScalarWhereInput | PublicacaoScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutAutorInput | ComentarioUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutAutorInput | ComentarioUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutAutorInput | ComentarioUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput> | CurtidaCreateWithoutUsuarioInput[] | CurtidaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutUsuarioInput | CurtidaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutUsuarioInput | CurtidaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CurtidaCreateManyUsuarioInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutUsuarioInput | CurtidaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutUsuarioInput | CurtidaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type SeguirUncheckedUpdateManyWithoutSeguidorNestedInput = {
    create?: XOR<SeguirCreateWithoutSeguidorInput, SeguirUncheckedCreateWithoutSeguidorInput> | SeguirCreateWithoutSeguidorInput[] | SeguirUncheckedCreateWithoutSeguidorInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguidorInput | SeguirCreateOrConnectWithoutSeguidorInput[]
    upsert?: SeguirUpsertWithWhereUniqueWithoutSeguidorInput | SeguirUpsertWithWhereUniqueWithoutSeguidorInput[]
    createMany?: SeguirCreateManySeguidorInputEnvelope
    set?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    disconnect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    delete?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    update?: SeguirUpdateWithWhereUniqueWithoutSeguidorInput | SeguirUpdateWithWhereUniqueWithoutSeguidorInput[]
    updateMany?: SeguirUpdateManyWithWhereWithoutSeguidorInput | SeguirUpdateManyWithWhereWithoutSeguidorInput[]
    deleteMany?: SeguirScalarWhereInput | SeguirScalarWhereInput[]
  }

  export type SeguirUncheckedUpdateManyWithoutSeguindoNestedInput = {
    create?: XOR<SeguirCreateWithoutSeguindoInput, SeguirUncheckedCreateWithoutSeguindoInput> | SeguirCreateWithoutSeguindoInput[] | SeguirUncheckedCreateWithoutSeguindoInput[]
    connectOrCreate?: SeguirCreateOrConnectWithoutSeguindoInput | SeguirCreateOrConnectWithoutSeguindoInput[]
    upsert?: SeguirUpsertWithWhereUniqueWithoutSeguindoInput | SeguirUpsertWithWhereUniqueWithoutSeguindoInput[]
    createMany?: SeguirCreateManySeguindoInputEnvelope
    set?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    disconnect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    delete?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    connect?: SeguirWhereUniqueInput | SeguirWhereUniqueInput[]
    update?: SeguirUpdateWithWhereUniqueWithoutSeguindoInput | SeguirUpdateWithWhereUniqueWithoutSeguindoInput[]
    updateMany?: SeguirUpdateManyWithWhereWithoutSeguindoInput | SeguirUpdateManyWithWhereWithoutSeguindoInput[]
    deleteMany?: SeguirScalarWhereInput | SeguirScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPublicacoesInput = {
    create?: XOR<UsuarioCreateWithoutPublicacoesInput, UsuarioUncheckedCreateWithoutPublicacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPublicacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ComentarioCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<ComentarioCreateWithoutPublicacaoInput, ComentarioUncheckedCreateWithoutPublicacaoInput> | ComentarioCreateWithoutPublicacaoInput[] | ComentarioUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPublicacaoInput | ComentarioCreateOrConnectWithoutPublicacaoInput[]
    createMany?: ComentarioCreateManyPublicacaoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<CurtidaCreateWithoutPublicacaoInput, CurtidaUncheckedCreateWithoutPublicacaoInput> | CurtidaCreateWithoutPublicacaoInput[] | CurtidaUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPublicacaoInput | CurtidaCreateOrConnectWithoutPublicacaoInput[]
    createMany?: CurtidaCreateManyPublicacaoInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type ImagemCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<ImagemCreateWithoutPublicacaoInput, ImagemUncheckedCreateWithoutPublicacaoInput> | ImagemCreateWithoutPublicacaoInput[] | ImagemUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPublicacaoInput | ImagemCreateOrConnectWithoutPublicacaoInput[]
    createMany?: ImagemCreateManyPublicacaoInputEnvelope
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<ComentarioCreateWithoutPublicacaoInput, ComentarioUncheckedCreateWithoutPublicacaoInput> | ComentarioCreateWithoutPublicacaoInput[] | ComentarioUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPublicacaoInput | ComentarioCreateOrConnectWithoutPublicacaoInput[]
    createMany?: ComentarioCreateManyPublicacaoInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaUncheckedCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<CurtidaCreateWithoutPublicacaoInput, CurtidaUncheckedCreateWithoutPublicacaoInput> | CurtidaCreateWithoutPublicacaoInput[] | CurtidaUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPublicacaoInput | CurtidaCreateOrConnectWithoutPublicacaoInput[]
    createMany?: CurtidaCreateManyPublicacaoInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type ImagemUncheckedCreateNestedManyWithoutPublicacaoInput = {
    create?: XOR<ImagemCreateWithoutPublicacaoInput, ImagemUncheckedCreateWithoutPublicacaoInput> | ImagemCreateWithoutPublicacaoInput[] | ImagemUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPublicacaoInput | ImagemCreateOrConnectWithoutPublicacaoInput[]
    createMany?: ImagemCreateManyPublicacaoInputEnvelope
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPublicacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutPublicacoesInput, UsuarioUncheckedCreateWithoutPublicacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPublicacoesInput
    upsert?: UsuarioUpsertWithoutPublicacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPublicacoesInput, UsuarioUpdateWithoutPublicacoesInput>, UsuarioUncheckedUpdateWithoutPublicacoesInput>
  }

  export type ComentarioUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<ComentarioCreateWithoutPublicacaoInput, ComentarioUncheckedCreateWithoutPublicacaoInput> | ComentarioCreateWithoutPublicacaoInput[] | ComentarioUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPublicacaoInput | ComentarioCreateOrConnectWithoutPublicacaoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPublicacaoInput | ComentarioUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: ComentarioCreateManyPublicacaoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPublicacaoInput | ComentarioUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPublicacaoInput | ComentarioUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<CurtidaCreateWithoutPublicacaoInput, CurtidaUncheckedCreateWithoutPublicacaoInput> | CurtidaCreateWithoutPublicacaoInput[] | CurtidaUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPublicacaoInput | CurtidaCreateOrConnectWithoutPublicacaoInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutPublicacaoInput | CurtidaUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: CurtidaCreateManyPublicacaoInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutPublicacaoInput | CurtidaUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutPublicacaoInput | CurtidaUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type ImagemUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<ImagemCreateWithoutPublicacaoInput, ImagemUncheckedCreateWithoutPublicacaoInput> | ImagemCreateWithoutPublicacaoInput[] | ImagemUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPublicacaoInput | ImagemCreateOrConnectWithoutPublicacaoInput[]
    upsert?: ImagemUpsertWithWhereUniqueWithoutPublicacaoInput | ImagemUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: ImagemCreateManyPublicacaoInputEnvelope
    set?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    disconnect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    delete?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    update?: ImagemUpdateWithWhereUniqueWithoutPublicacaoInput | ImagemUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: ImagemUpdateManyWithWhereWithoutPublicacaoInput | ImagemUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<ComentarioCreateWithoutPublicacaoInput, ComentarioUncheckedCreateWithoutPublicacaoInput> | ComentarioCreateWithoutPublicacaoInput[] | ComentarioUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPublicacaoInput | ComentarioCreateOrConnectWithoutPublicacaoInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPublicacaoInput | ComentarioUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: ComentarioCreateManyPublicacaoInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPublicacaoInput | ComentarioUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPublicacaoInput | ComentarioUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUncheckedUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<CurtidaCreateWithoutPublicacaoInput, CurtidaUncheckedCreateWithoutPublicacaoInput> | CurtidaCreateWithoutPublicacaoInput[] | CurtidaUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPublicacaoInput | CurtidaCreateOrConnectWithoutPublicacaoInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutPublicacaoInput | CurtidaUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: CurtidaCreateManyPublicacaoInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutPublicacaoInput | CurtidaUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutPublicacaoInput | CurtidaUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type ImagemUncheckedUpdateManyWithoutPublicacaoNestedInput = {
    create?: XOR<ImagemCreateWithoutPublicacaoInput, ImagemUncheckedCreateWithoutPublicacaoInput> | ImagemCreateWithoutPublicacaoInput[] | ImagemUncheckedCreateWithoutPublicacaoInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPublicacaoInput | ImagemCreateOrConnectWithoutPublicacaoInput[]
    upsert?: ImagemUpsertWithWhereUniqueWithoutPublicacaoInput | ImagemUpsertWithWhereUniqueWithoutPublicacaoInput[]
    createMany?: ImagemCreateManyPublicacaoInputEnvelope
    set?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    disconnect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    delete?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    update?: ImagemUpdateWithWhereUniqueWithoutPublicacaoInput | ImagemUpdateWithWhereUniqueWithoutPublicacaoInput[]
    updateMany?: ImagemUpdateManyWithWhereWithoutPublicacaoInput | ImagemUpdateManyWithWhereWithoutPublicacaoInput[]
    deleteMany?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
  }

  export type PublicacaoCreateNestedOneWithoutImagensInput = {
    create?: XOR<PublicacaoCreateWithoutImagensInput, PublicacaoUncheckedCreateWithoutImagensInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutImagensInput
    connect?: PublicacaoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PublicacaoUpdateOneRequiredWithoutImagensNestedInput = {
    create?: XOR<PublicacaoCreateWithoutImagensInput, PublicacaoUncheckedCreateWithoutImagensInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutImagensInput
    upsert?: PublicacaoUpsertWithoutImagensInput
    connect?: PublicacaoWhereUniqueInput
    update?: XOR<XOR<PublicacaoUpdateToOneWithWhereWithoutImagensInput, PublicacaoUpdateWithoutImagensInput>, PublicacaoUncheckedUpdateWithoutImagensInput>
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PublicacaoCreateNestedOneWithoutComentariosInput = {
    create?: XOR<PublicacaoCreateWithoutComentariosInput, PublicacaoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutComentariosInput
    connect?: PublicacaoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type PublicacaoUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<PublicacaoCreateWithoutComentariosInput, PublicacaoUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutComentariosInput
    upsert?: PublicacaoUpsertWithoutComentariosInput
    connect?: PublicacaoWhereUniqueInput
    update?: XOR<XOR<PublicacaoUpdateToOneWithWhereWithoutComentariosInput, PublicacaoUpdateWithoutComentariosInput>, PublicacaoUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PublicacaoCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<PublicacaoCreateWithoutCurtidasInput, PublicacaoUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutCurtidasInput
    connect?: PublicacaoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasInput
    upsert?: UsuarioUpsertWithoutCurtidasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCurtidasInput, UsuarioUpdateWithoutCurtidasInput>, UsuarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type PublicacaoUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<PublicacaoCreateWithoutCurtidasInput, PublicacaoUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PublicacaoCreateOrConnectWithoutCurtidasInput
    upsert?: PublicacaoUpsertWithoutCurtidasInput
    connect?: PublicacaoWhereUniqueInput
    update?: XOR<XOR<PublicacaoUpdateToOneWithWhereWithoutCurtidasInput, PublicacaoUpdateWithoutCurtidasInput>, PublicacaoUncheckedUpdateWithoutCurtidasInput>
  }

  export type UsuarioCreateNestedOneWithoutSeguindoInput = {
    create?: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguindoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSeguidoresInput = {
    create?: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguidoresInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSeguindoNestedInput = {
    create?: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguindoInput
    upsert?: UsuarioUpsertWithoutSeguindoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSeguindoInput, UsuarioUpdateWithoutSeguindoInput>, UsuarioUncheckedUpdateWithoutSeguindoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutSeguidoresNestedInput = {
    create?: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSeguidoresInput
    upsert?: UsuarioUpsertWithoutSeguidoresInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSeguidoresInput, UsuarioUpdateWithoutSeguidoresInput>, UsuarioUncheckedUpdateWithoutSeguidoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PublicacaoCreateWithoutAutorInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    comentarios?: ComentarioCreateNestedManyWithoutPublicacaoInput
    curtidas?: CurtidaCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateWithoutAutorInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPublicacaoInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoCreateOrConnectWithoutAutorInput = {
    where: PublicacaoWhereUniqueInput
    create: XOR<PublicacaoCreateWithoutAutorInput, PublicacaoUncheckedCreateWithoutAutorInput>
  }

  export type PublicacaoCreateManyAutorInputEnvelope = {
    data: PublicacaoCreateManyAutorInput | PublicacaoCreateManyAutorInput[]
  }

  export type ComentarioCreateWithoutAutorInput = {
    conteudo: string
    criadoEm?: Date | string
    publicacao: PublicacaoCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutAutorInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    publicacaoId: number
  }

  export type ComentarioCreateOrConnectWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioCreateManyAutorInputEnvelope = {
    data: ComentarioCreateManyAutorInput | ComentarioCreateManyAutorInput[]
  }

  export type CurtidaCreateWithoutUsuarioInput = {
    criadoEm?: Date | string
    publicacao: PublicacaoCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    criadoEm?: Date | string
    publicacaoId: number
  }

  export type CurtidaCreateOrConnectWithoutUsuarioInput = {
    where: CurtidaWhereUniqueInput
    create: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaCreateManyUsuarioInputEnvelope = {
    data: CurtidaCreateManyUsuarioInput | CurtidaCreateManyUsuarioInput[]
  }

  export type SeguirCreateWithoutSeguidorInput = {
    criadoEm?: Date | string
    seguindo: UsuarioCreateNestedOneWithoutSeguidoresInput
  }

  export type SeguirUncheckedCreateWithoutSeguidorInput = {
    seguindoId: number
    criadoEm?: Date | string
  }

  export type SeguirCreateOrConnectWithoutSeguidorInput = {
    where: SeguirWhereUniqueInput
    create: XOR<SeguirCreateWithoutSeguidorInput, SeguirUncheckedCreateWithoutSeguidorInput>
  }

  export type SeguirCreateManySeguidorInputEnvelope = {
    data: SeguirCreateManySeguidorInput | SeguirCreateManySeguidorInput[]
  }

  export type SeguirCreateWithoutSeguindoInput = {
    criadoEm?: Date | string
    seguidor: UsuarioCreateNestedOneWithoutSeguindoInput
  }

  export type SeguirUncheckedCreateWithoutSeguindoInput = {
    seguidorId: number
    criadoEm?: Date | string
  }

  export type SeguirCreateOrConnectWithoutSeguindoInput = {
    where: SeguirWhereUniqueInput
    create: XOR<SeguirCreateWithoutSeguindoInput, SeguirUncheckedCreateWithoutSeguindoInput>
  }

  export type SeguirCreateManySeguindoInputEnvelope = {
    data: SeguirCreateManySeguindoInput | SeguirCreateManySeguindoInput[]
  }

  export type PublicacaoUpsertWithWhereUniqueWithoutAutorInput = {
    where: PublicacaoWhereUniqueInput
    update: XOR<PublicacaoUpdateWithoutAutorInput, PublicacaoUncheckedUpdateWithoutAutorInput>
    create: XOR<PublicacaoCreateWithoutAutorInput, PublicacaoUncheckedCreateWithoutAutorInput>
  }

  export type PublicacaoUpdateWithWhereUniqueWithoutAutorInput = {
    where: PublicacaoWhereUniqueInput
    data: XOR<PublicacaoUpdateWithoutAutorInput, PublicacaoUncheckedUpdateWithoutAutorInput>
  }

  export type PublicacaoUpdateManyWithWhereWithoutAutorInput = {
    where: PublicacaoScalarWhereInput
    data: XOR<PublicacaoUpdateManyMutationInput, PublicacaoUncheckedUpdateManyWithoutAutorInput>
  }

  export type PublicacaoScalarWhereInput = {
    AND?: PublicacaoScalarWhereInput | PublicacaoScalarWhereInput[]
    OR?: PublicacaoScalarWhereInput[]
    NOT?: PublicacaoScalarWhereInput | PublicacaoScalarWhereInput[]
    id?: IntFilter<"Publicacao"> | number
    titulo?: StringFilter<"Publicacao"> | string
    conteudo?: StringFilter<"Publicacao"> | string
    criadoEm?: DateTimeFilter<"Publicacao"> | Date | string
    categoria?: StringNullableFilter<"Publicacao"> | string | null
    autorId?: IntFilter<"Publicacao"> | number
  }

  export type ComentarioUpsertWithWhereUniqueWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutAutorInput, ComentarioUncheckedUpdateWithoutAutorInput>
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutAutorInput, ComentarioUncheckedUpdateWithoutAutorInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutAutorInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutAutorInput>
  }

  export type ComentarioScalarWhereInput = {
    AND?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    OR?: ComentarioScalarWhereInput[]
    NOT?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    publicacaoId?: IntFilter<"Comentario"> | number
  }

  export type CurtidaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaWhereUniqueInput
    update: XOR<CurtidaUpdateWithoutUsuarioInput, CurtidaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CurtidaCreateWithoutUsuarioInput, CurtidaUncheckedCreateWithoutUsuarioInput>
  }

  export type CurtidaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CurtidaWhereUniqueInput
    data: XOR<CurtidaUpdateWithoutUsuarioInput, CurtidaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CurtidaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CurtidaScalarWhereInput
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CurtidaScalarWhereInput = {
    AND?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
    OR?: CurtidaScalarWhereInput[]
    NOT?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
    id?: IntFilter<"Curtida"> | number
    criadoEm?: DateTimeFilter<"Curtida"> | Date | string
    usuarioId?: IntFilter<"Curtida"> | number
    publicacaoId?: IntFilter<"Curtida"> | number
  }

  export type SeguirUpsertWithWhereUniqueWithoutSeguidorInput = {
    where: SeguirWhereUniqueInput
    update: XOR<SeguirUpdateWithoutSeguidorInput, SeguirUncheckedUpdateWithoutSeguidorInput>
    create: XOR<SeguirCreateWithoutSeguidorInput, SeguirUncheckedCreateWithoutSeguidorInput>
  }

  export type SeguirUpdateWithWhereUniqueWithoutSeguidorInput = {
    where: SeguirWhereUniqueInput
    data: XOR<SeguirUpdateWithoutSeguidorInput, SeguirUncheckedUpdateWithoutSeguidorInput>
  }

  export type SeguirUpdateManyWithWhereWithoutSeguidorInput = {
    where: SeguirScalarWhereInput
    data: XOR<SeguirUpdateManyMutationInput, SeguirUncheckedUpdateManyWithoutSeguidorInput>
  }

  export type SeguirScalarWhereInput = {
    AND?: SeguirScalarWhereInput | SeguirScalarWhereInput[]
    OR?: SeguirScalarWhereInput[]
    NOT?: SeguirScalarWhereInput | SeguirScalarWhereInput[]
    seguidorId?: IntFilter<"Seguir"> | number
    seguindoId?: IntFilter<"Seguir"> | number
    criadoEm?: DateTimeFilter<"Seguir"> | Date | string
  }

  export type SeguirUpsertWithWhereUniqueWithoutSeguindoInput = {
    where: SeguirWhereUniqueInput
    update: XOR<SeguirUpdateWithoutSeguindoInput, SeguirUncheckedUpdateWithoutSeguindoInput>
    create: XOR<SeguirCreateWithoutSeguindoInput, SeguirUncheckedCreateWithoutSeguindoInput>
  }

  export type SeguirUpdateWithWhereUniqueWithoutSeguindoInput = {
    where: SeguirWhereUniqueInput
    data: XOR<SeguirUpdateWithoutSeguindoInput, SeguirUncheckedUpdateWithoutSeguindoInput>
  }

  export type SeguirUpdateManyWithWhereWithoutSeguindoInput = {
    where: SeguirScalarWhereInput
    data: XOR<SeguirUpdateManyMutationInput, SeguirUncheckedUpdateManyWithoutSeguindoInput>
  }

  export type UsuarioCreateWithoutPublicacoesInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateWithoutPublicacoesInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirUncheckedCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioCreateOrConnectWithoutPublicacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPublicacoesInput, UsuarioUncheckedCreateWithoutPublicacoesInput>
  }

  export type ComentarioCreateWithoutPublicacaoInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutPublicacaoInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
  }

  export type ComentarioCreateOrConnectWithoutPublicacaoInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutPublicacaoInput, ComentarioUncheckedCreateWithoutPublicacaoInput>
  }

  export type ComentarioCreateManyPublicacaoInputEnvelope = {
    data: ComentarioCreateManyPublicacaoInput | ComentarioCreateManyPublicacaoInput[]
  }

  export type CurtidaCreateWithoutPublicacaoInput = {
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateWithoutPublicacaoInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
  }

  export type CurtidaCreateOrConnectWithoutPublicacaoInput = {
    where: CurtidaWhereUniqueInput
    create: XOR<CurtidaCreateWithoutPublicacaoInput, CurtidaUncheckedCreateWithoutPublicacaoInput>
  }

  export type CurtidaCreateManyPublicacaoInputEnvelope = {
    data: CurtidaCreateManyPublicacaoInput | CurtidaCreateManyPublicacaoInput[]
  }

  export type ImagemCreateWithoutPublicacaoInput = {
    url: string
    descricao?: string | null
    ordem?: number | null
    criadoEm?: Date | string
  }

  export type ImagemUncheckedCreateWithoutPublicacaoInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number | null
    criadoEm?: Date | string
  }

  export type ImagemCreateOrConnectWithoutPublicacaoInput = {
    where: ImagemWhereUniqueInput
    create: XOR<ImagemCreateWithoutPublicacaoInput, ImagemUncheckedCreateWithoutPublicacaoInput>
  }

  export type ImagemCreateManyPublicacaoInputEnvelope = {
    data: ImagemCreateManyPublicacaoInput | ImagemCreateManyPublicacaoInput[]
  }

  export type UsuarioUpsertWithoutPublicacoesInput = {
    update: XOR<UsuarioUpdateWithoutPublicacoesInput, UsuarioUncheckedUpdateWithoutPublicacoesInput>
    create: XOR<UsuarioCreateWithoutPublicacoesInput, UsuarioUncheckedCreateWithoutPublicacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPublicacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPublicacoesInput, UsuarioUncheckedUpdateWithoutPublicacoesInput>
  }

  export type UsuarioUpdateWithoutPublicacoesInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPublicacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUncheckedUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type ComentarioUpsertWithWhereUniqueWithoutPublicacaoInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutPublicacaoInput, ComentarioUncheckedUpdateWithoutPublicacaoInput>
    create: XOR<ComentarioCreateWithoutPublicacaoInput, ComentarioUncheckedCreateWithoutPublicacaoInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutPublicacaoInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutPublicacaoInput, ComentarioUncheckedUpdateWithoutPublicacaoInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutPublicacaoInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutPublicacaoInput>
  }

  export type CurtidaUpsertWithWhereUniqueWithoutPublicacaoInput = {
    where: CurtidaWhereUniqueInput
    update: XOR<CurtidaUpdateWithoutPublicacaoInput, CurtidaUncheckedUpdateWithoutPublicacaoInput>
    create: XOR<CurtidaCreateWithoutPublicacaoInput, CurtidaUncheckedCreateWithoutPublicacaoInput>
  }

  export type CurtidaUpdateWithWhereUniqueWithoutPublicacaoInput = {
    where: CurtidaWhereUniqueInput
    data: XOR<CurtidaUpdateWithoutPublicacaoInput, CurtidaUncheckedUpdateWithoutPublicacaoInput>
  }

  export type CurtidaUpdateManyWithWhereWithoutPublicacaoInput = {
    where: CurtidaScalarWhereInput
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyWithoutPublicacaoInput>
  }

  export type ImagemUpsertWithWhereUniqueWithoutPublicacaoInput = {
    where: ImagemWhereUniqueInput
    update: XOR<ImagemUpdateWithoutPublicacaoInput, ImagemUncheckedUpdateWithoutPublicacaoInput>
    create: XOR<ImagemCreateWithoutPublicacaoInput, ImagemUncheckedCreateWithoutPublicacaoInput>
  }

  export type ImagemUpdateWithWhereUniqueWithoutPublicacaoInput = {
    where: ImagemWhereUniqueInput
    data: XOR<ImagemUpdateWithoutPublicacaoInput, ImagemUncheckedUpdateWithoutPublicacaoInput>
  }

  export type ImagemUpdateManyWithWhereWithoutPublicacaoInput = {
    where: ImagemScalarWhereInput
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyWithoutPublicacaoInput>
  }

  export type ImagemScalarWhereInput = {
    AND?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
    OR?: ImagemScalarWhereInput[]
    NOT?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
    id?: IntFilter<"Imagem"> | number
    url?: StringFilter<"Imagem"> | string
    descricao?: StringNullableFilter<"Imagem"> | string | null
    ordem?: IntNullableFilter<"Imagem"> | number | null
    criadoEm?: DateTimeFilter<"Imagem"> | Date | string
    publicacaoId?: IntFilter<"Imagem"> | number
  }

  export type PublicacaoCreateWithoutImagensInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPublicacoesInput
    comentarios?: ComentarioCreateNestedManyWithoutPublicacaoInput
    curtidas?: CurtidaCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateWithoutImagensInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPublicacaoInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoCreateOrConnectWithoutImagensInput = {
    where: PublicacaoWhereUniqueInput
    create: XOR<PublicacaoCreateWithoutImagensInput, PublicacaoUncheckedCreateWithoutImagensInput>
  }

  export type PublicacaoUpsertWithoutImagensInput = {
    update: XOR<PublicacaoUpdateWithoutImagensInput, PublicacaoUncheckedUpdateWithoutImagensInput>
    create: XOR<PublicacaoCreateWithoutImagensInput, PublicacaoUncheckedCreateWithoutImagensInput>
    where?: PublicacaoWhereInput
  }

  export type PublicacaoUpdateToOneWithWhereWithoutImagensInput = {
    where?: PublicacaoWhereInput
    data: XOR<PublicacaoUpdateWithoutImagensInput, PublicacaoUncheckedUpdateWithoutImagensInput>
  }

  export type PublicacaoUpdateWithoutImagensInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPublicacoesNestedInput
    comentarios?: ComentarioUpdateManyWithoutPublicacaoNestedInput
    curtidas?: CurtidaUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateWithoutImagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPublicacaoNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirUncheckedCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type PublicacaoCreateWithoutComentariosInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPublicacoesInput
    curtidas?: CurtidaCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateWithoutComentariosInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autorId: number
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoCreateOrConnectWithoutComentariosInput = {
    where: PublicacaoWhereUniqueInput
    create: XOR<PublicacaoCreateWithoutComentariosInput, PublicacaoUncheckedCreateWithoutComentariosInput>
  }

  export type UsuarioUpsertWithoutComentariosInput = {
    update: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutComentariosInput, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioUpdateWithoutComentariosInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUncheckedUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type PublicacaoUpsertWithoutComentariosInput = {
    update: XOR<PublicacaoUpdateWithoutComentariosInput, PublicacaoUncheckedUpdateWithoutComentariosInput>
    create: XOR<PublicacaoCreateWithoutComentariosInput, PublicacaoUncheckedCreateWithoutComentariosInput>
    where?: PublicacaoWhereInput
  }

  export type PublicacaoUpdateToOneWithWhereWithoutComentariosInput = {
    where?: PublicacaoWhereInput
    data: XOR<PublicacaoUpdateWithoutComentariosInput, PublicacaoUncheckedUpdateWithoutComentariosInput>
  }

  export type PublicacaoUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPublicacoesNestedInput
    curtidas?: CurtidaUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    curtidas?: CurtidaUncheckedUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type UsuarioCreateWithoutCurtidasInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    seguindo?: SeguirCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateWithoutCurtidasInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    seguindo?: SeguirUncheckedCreateNestedManyWithoutSeguidorInput
    seguidores?: SeguirUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioCreateOrConnectWithoutCurtidasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
  }

  export type PublicacaoCreateWithoutCurtidasInput = {
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autor: UsuarioCreateNestedOneWithoutPublicacoesInput
    comentarios?: ComentarioCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoUncheckedCreateWithoutCurtidasInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPublicacaoInput
    imagens?: ImagemUncheckedCreateNestedManyWithoutPublicacaoInput
  }

  export type PublicacaoCreateOrConnectWithoutCurtidasInput = {
    where: PublicacaoWhereUniqueInput
    create: XOR<PublicacaoCreateWithoutCurtidasInput, PublicacaoUncheckedCreateWithoutCurtidasInput>
  }

  export type UsuarioUpsertWithoutCurtidasInput = {
    update: XOR<UsuarioUpdateWithoutCurtidasInput, UsuarioUncheckedUpdateWithoutCurtidasInput>
    create: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCurtidasInput, UsuarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type UsuarioUpdateWithoutCurtidasInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    seguindo?: SeguirUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    seguindo?: SeguirUncheckedUpdateManyWithoutSeguidorNestedInput
    seguidores?: SeguirUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type PublicacaoUpsertWithoutCurtidasInput = {
    update: XOR<PublicacaoUpdateWithoutCurtidasInput, PublicacaoUncheckedUpdateWithoutCurtidasInput>
    create: XOR<PublicacaoCreateWithoutCurtidasInput, PublicacaoUncheckedCreateWithoutCurtidasInput>
    where?: PublicacaoWhereInput
  }

  export type PublicacaoUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: PublicacaoWhereInput
    data: XOR<PublicacaoUpdateWithoutCurtidasInput, PublicacaoUncheckedUpdateWithoutCurtidasInput>
  }

  export type PublicacaoUpdateWithoutCurtidasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: UsuarioUpdateOneRequiredWithoutPublicacoesNestedInput
    comentarios?: ComentarioUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type UsuarioCreateWithoutSeguindoInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
    seguidores?: SeguirCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioUncheckedCreateWithoutSeguindoInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
    seguidores?: SeguirUncheckedCreateNestedManyWithoutSeguindoInput
  }

  export type UsuarioCreateOrConnectWithoutSeguindoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
  }

  export type UsuarioCreateWithoutSeguidoresInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirCreateNestedManyWithoutSeguidorInput
  }

  export type UsuarioUncheckedCreateWithoutSeguidoresInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    biografia?: string | null
    urlFotoPerfil?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    publicacoes?: PublicacaoUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutUsuarioInput
    seguindo?: SeguirUncheckedCreateNestedManyWithoutSeguidorInput
  }

  export type UsuarioCreateOrConnectWithoutSeguidoresInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
  }

  export type UsuarioUpsertWithoutSeguindoInput = {
    update: XOR<UsuarioUpdateWithoutSeguindoInput, UsuarioUncheckedUpdateWithoutSeguindoInput>
    create: XOR<UsuarioCreateWithoutSeguindoInput, UsuarioUncheckedCreateWithoutSeguindoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSeguindoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSeguindoInput, UsuarioUncheckedUpdateWithoutSeguindoInput>
  }

  export type UsuarioUpdateWithoutSeguindoInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
    seguidores?: SeguirUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSeguindoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
    seguidores?: SeguirUncheckedUpdateManyWithoutSeguindoNestedInput
  }

  export type UsuarioUpsertWithoutSeguidoresInput = {
    update: XOR<UsuarioUpdateWithoutSeguidoresInput, UsuarioUncheckedUpdateWithoutSeguidoresInput>
    create: XOR<UsuarioCreateWithoutSeguidoresInput, UsuarioUncheckedCreateWithoutSeguidoresInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSeguidoresInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSeguidoresInput, UsuarioUncheckedUpdateWithoutSeguidoresInput>
  }

  export type UsuarioUpdateWithoutSeguidoresInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUpdateManyWithoutSeguidorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSeguidoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    urlFotoPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacoes?: PublicacaoUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutUsuarioNestedInput
    seguindo?: SeguirUncheckedUpdateManyWithoutSeguidorNestedInput
  }

  export type PublicacaoCreateManyAutorInput = {
    id?: number
    titulo: string
    conteudo: string
    criadoEm?: Date | string
    categoria?: string | null
  }

  export type ComentarioCreateManyAutorInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    publicacaoId: number
  }

  export type CurtidaCreateManyUsuarioInput = {
    id?: number
    criadoEm?: Date | string
    publicacaoId: number
  }

  export type SeguirCreateManySeguidorInput = {
    seguindoId: number
    criadoEm?: Date | string
  }

  export type SeguirCreateManySeguindoInput = {
    seguidorId: number
    criadoEm?: Date | string
  }

  export type PublicacaoUpdateWithoutAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comentarios?: ComentarioUpdateManyWithoutPublicacaoNestedInput
    curtidas?: CurtidaUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    comentarios?: ComentarioUncheckedUpdateManyWithoutPublicacaoNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPublicacaoNestedInput
    imagens?: ImagemUncheckedUpdateManyWithoutPublicacaoNestedInput
  }

  export type PublicacaoUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentarioUpdateWithoutAutorInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacao?: PublicacaoUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUpdateWithoutUsuarioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacao?: PublicacaoUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacaoId?: IntFieldUpdateOperationsInput | number
  }

  export type SeguirUpdateWithoutSeguidorInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    seguindo?: UsuarioUpdateOneRequiredWithoutSeguidoresNestedInput
  }

  export type SeguirUncheckedUpdateWithoutSeguidorInput = {
    seguindoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguirUncheckedUpdateManyWithoutSeguidorInput = {
    seguindoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguirUpdateWithoutSeguindoInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    seguidor?: UsuarioUpdateOneRequiredWithoutSeguindoNestedInput
  }

  export type SeguirUncheckedUpdateWithoutSeguindoInput = {
    seguidorId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeguirUncheckedUpdateManyWithoutSeguindoInput = {
    seguidorId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioCreateManyPublicacaoInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
  }

  export type CurtidaCreateManyPublicacaoInput = {
    id?: number
    criadoEm?: Date | string
    usuarioId: number
  }

  export type ImagemCreateManyPublicacaoInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number | null
    criadoEm?: Date | string
  }

  export type ComentarioUpdateWithoutPublicacaoInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutPublicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutPublicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUpdateWithoutPublicacaoInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateWithoutPublicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUncheckedUpdateManyWithoutPublicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemUpdateWithoutPublicacaoInput = {
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemUncheckedUpdateWithoutPublicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagemUncheckedUpdateManyWithoutPublicacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}