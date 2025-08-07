
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
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
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

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
    Post: 'Post',
    Imagem: 'Imagem',
    Comentario: 'Comentario',
    Curtida: 'Curtida'
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
      modelProps: "usuario" | "post" | "imagem" | "comentario" | "curtida"
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
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
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
    post?: PostOmit
    imagem?: ImagemOmit
    comentario?: ComentarioOmit
    curtida?: CurtidaOmit
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
    posts: number
    comentarios: number
    curtidas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsuarioCountOutputTypeCountPostsArgs
    comentarios?: boolean | UsuarioCountOutputTypeCountComentariosArgs
    curtidas?: boolean | UsuarioCountOutputTypeCountCurtidasArgs
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
  export type UsuarioCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
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
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    imagens: number
    comentarios: number
    curtidas: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imagens?: boolean | PostCountOutputTypeCountImagensArgs
    comentarios?: boolean | PostCountOutputTypeCountComentariosArgs
    curtidas?: boolean | PostCountOutputTypeCountCurtidasArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountImagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagemWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentarioWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCurtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurtidaWhereInput
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
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nomeUsuario: string | null
    email: string | null
    senhaHash: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nomeUsuario: number
    email: number
    senhaHash: number
    criadoEm: number
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
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nomeUsuario?: true
    email?: true
    senhaHash?: true
    criadoEm?: true
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
    criadoEm: Date
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
    criadoEm?: boolean
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidas?: boolean | Usuario$curtidasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nomeUsuario?: boolean
    email?: boolean
    senhaHash?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeUsuario" | "email" | "senhaHash" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Usuario$postsArgs<ExtArgs>
    comentarios?: boolean | Usuario$comentariosArgs<ExtArgs>
    curtidas?: boolean | Usuario$curtidasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeUsuario: string
      email: string
      senhaHash: string
      criadoEm: Date
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
    posts<T extends Usuario$postsArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Usuario$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Usuario$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
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
   * Usuario.posts
   */
  export type Usuario$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    autorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    autorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    categoria: string | null
    criadoEm: Date | null
    autorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    conteudo: string | null
    categoria: string | null
    criadoEm: Date | null
    autorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    categoria: number
    criadoEm: number
    autorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    autorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    autorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    categoria?: true
    criadoEm?: true
    autorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    categoria?: true
    criadoEm?: true
    autorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    categoria?: true
    criadoEm?: true
    autorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    titulo: string
    conteudo: string | null
    categoria: string
    criadoEm: Date
    autorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    categoria?: boolean
    criadoEm?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    imagens?: boolean | Post$imagensArgs<ExtArgs>
    comentarios?: boolean | Post$comentariosArgs<ExtArgs>
    curtidas?: boolean | Post$curtidasArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    categoria?: boolean
    criadoEm?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    categoria?: boolean
    criadoEm?: boolean
    autorId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    categoria?: boolean
    criadoEm?: boolean
    autorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "conteudo" | "categoria" | "criadoEm" | "autorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    imagens?: boolean | Post$imagensArgs<ExtArgs>
    comentarios?: boolean | Post$comentariosArgs<ExtArgs>
    curtidas?: boolean | Post$curtidasArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      imagens: Prisma.$ImagemPayload<ExtArgs>[]
      comentarios: Prisma.$ComentarioPayload<ExtArgs>[]
      curtidas: Prisma.$CurtidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      conteudo: string | null
      categoria: string
      criadoEm: Date
      autorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imagens<T extends Post$imagensArgs<ExtArgs> = {}>(args?: Subset<T, Post$imagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comentarios<T extends Post$comentariosArgs<ExtArgs> = {}>(args?: Subset<T, Post$comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curtidas<T extends Post$curtidasArgs<ExtArgs> = {}>(args?: Subset<T, Post$curtidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurtidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly titulo: FieldRef<"Post", 'String'>
    readonly conteudo: FieldRef<"Post", 'String'>
    readonly categoria: FieldRef<"Post", 'String'>
    readonly criadoEm: FieldRef<"Post", 'DateTime'>
    readonly autorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.imagens
   */
  export type Post$imagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Post.comentarios
   */
  export type Post$comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Post.curtidas
   */
  export type Post$curtidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
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
    postId: number | null
  }

  export type ImagemSumAggregateOutputType = {
    id: number | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemMinAggregateOutputType = {
    id: number | null
    url: string | null
    descricao: string | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemMaxAggregateOutputType = {
    id: number | null
    url: string | null
    descricao: string | null
    ordem: number | null
    postId: number | null
  }

  export type ImagemCountAggregateOutputType = {
    id: number
    url: number
    descricao: number
    ordem: number
    postId: number
    _all: number
  }


  export type ImagemAvgAggregateInputType = {
    id?: true
    ordem?: true
    postId?: true
  }

  export type ImagemSumAggregateInputType = {
    id?: true
    ordem?: true
    postId?: true
  }

  export type ImagemMinAggregateInputType = {
    id?: true
    url?: true
    descricao?: true
    ordem?: true
    postId?: true
  }

  export type ImagemMaxAggregateInputType = {
    id?: true
    url?: true
    descricao?: true
    ordem?: true
    postId?: true
  }

  export type ImagemCountAggregateInputType = {
    id?: true
    url?: true
    descricao?: true
    ordem?: true
    postId?: true
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
    ordem: number
    postId: number
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
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagem"]>

  export type ImagemSelectScalar = {
    id?: boolean
    url?: boolean
    descricao?: boolean
    ordem?: boolean
    postId?: boolean
  }

  export type ImagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "descricao" | "ordem" | "postId", ExtArgs["result"]["imagem"]>
  export type ImagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ImagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ImagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ImagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagem"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      descricao: string | null
      ordem: number
      postId: number
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
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly postId: FieldRef<"Imagem", 'Int'>
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
    postId: number | null
  }

  export type ComentarioSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    postId: number | null
  }

  export type ComentarioMinAggregateOutputType = {
    id: number | null
    conteudo: string | null
    criadoEm: Date | null
    autorId: number | null
    postId: number | null
  }

  export type ComentarioMaxAggregateOutputType = {
    id: number | null
    conteudo: string | null
    criadoEm: Date | null
    autorId: number | null
    postId: number | null
  }

  export type ComentarioCountAggregateOutputType = {
    id: number
    conteudo: number
    criadoEm: number
    autorId: number
    postId: number
    _all: number
  }


  export type ComentarioAvgAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
  }

  export type ComentarioSumAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
  }

  export type ComentarioMinAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    postId?: true
  }

  export type ComentarioMaxAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    postId?: true
  }

  export type ComentarioCountAggregateInputType = {
    id?: true
    conteudo?: true
    criadoEm?: true
    autorId?: true
    postId?: true
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
    postId: number
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
    postId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentario"]>

  export type ComentarioSelectScalar = {
    id?: boolean
    conteudo?: boolean
    criadoEm?: boolean
    autorId?: boolean
    postId?: boolean
  }

  export type ComentarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conteudo" | "criadoEm" | "autorId" | "postId", ExtArgs["result"]["comentario"]>
  export type ComentarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type ComentarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ComentarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentario"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conteudo: string
      criadoEm: Date
      autorId: number
      postId: number
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
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly postId: FieldRef<"Comentario", 'Int'>
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
    autorId: number | null
    postId: number | null
  }

  export type CurtidaSumAggregateOutputType = {
    id: number | null
    autorId: number | null
    postId: number | null
  }

  export type CurtidaMinAggregateOutputType = {
    id: number | null
    autorId: number | null
    postId: number | null
  }

  export type CurtidaMaxAggregateOutputType = {
    id: number | null
    autorId: number | null
    postId: number | null
  }

  export type CurtidaCountAggregateOutputType = {
    id: number
    autorId: number
    postId: number
    _all: number
  }


  export type CurtidaAvgAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
  }

  export type CurtidaSumAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
  }

  export type CurtidaMinAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
  }

  export type CurtidaMaxAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
  }

  export type CurtidaCountAggregateInputType = {
    id?: true
    autorId?: true
    postId?: true
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
    autorId: number
    postId: number
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
    autorId?: boolean
    postId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autorId?: boolean
    postId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    autorId?: boolean
    postId?: boolean
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curtida"]>

  export type CurtidaSelectScalar = {
    id?: boolean
    autorId?: boolean
    postId?: boolean
  }

  export type CurtidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "autorId" | "postId", ExtArgs["result"]["curtida"]>
  export type CurtidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CurtidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CurtidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | UsuarioDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CurtidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curtida"
    objects: {
      autor: Prisma.$UsuarioPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      autorId: number
      postId: number
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
    autor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly autorId: FieldRef<"Curtida", 'Int'>
    readonly postId: FieldRef<"Curtida", 'Int'>
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
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    categoria: 'categoria',
    criadoEm: 'criadoEm',
    autorId: 'autorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ImagemScalarFieldEnum: {
    id: 'id',
    url: 'url',
    descricao: 'descricao',
    ordem: 'ordem',
    postId: 'postId'
  };

  export type ImagemScalarFieldEnum = (typeof ImagemScalarFieldEnum)[keyof typeof ImagemScalarFieldEnum]


  export const ComentarioScalarFieldEnum: {
    id: 'id',
    conteudo: 'conteudo',
    criadoEm: 'criadoEm',
    autorId: 'autorId',
    postId: 'postId'
  };

  export type ComentarioScalarFieldEnum = (typeof ComentarioScalarFieldEnum)[keyof typeof ComentarioScalarFieldEnum]


  export const CurtidaScalarFieldEnum: {
    id: 'id',
    autorId: 'autorId',
    postId: 'postId'
  };

  export type CurtidaScalarFieldEnum = (typeof CurtidaScalarFieldEnum)[keyof typeof CurtidaScalarFieldEnum]


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
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    posts?: PostListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    criadoEm?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomeUsuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senhaHash?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    posts?: PostListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
  }, "id" | "nomeUsuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    criadoEm?: SortOrder
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
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    titulo?: StringFilter<"Post"> | string
    conteudo?: StringNullableFilter<"Post"> | string | null
    categoria?: StringFilter<"Post"> | string
    criadoEm?: DateTimeFilter<"Post"> | Date | string
    autorId?: IntFilter<"Post"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    imagens?: ImagemListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrderInput | SortOrder
    categoria?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    imagens?: ImagemOrderByRelationAggregateInput
    comentarios?: ComentarioOrderByRelationAggregateInput
    curtidas?: CurtidaOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    titulo?: StringFilter<"Post"> | string
    conteudo?: StringNullableFilter<"Post"> | string | null
    categoria?: StringFilter<"Post"> | string
    criadoEm?: DateTimeFilter<"Post"> | Date | string
    autorId?: IntFilter<"Post"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    imagens?: ImagemListRelationFilter
    comentarios?: ComentarioListRelationFilter
    curtidas?: CurtidaListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrderInput | SortOrder
    categoria?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    titulo?: StringWithAggregatesFilter<"Post"> | string
    conteudo?: StringNullableWithAggregatesFilter<"Post"> | string | null
    categoria?: StringWithAggregatesFilter<"Post"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    autorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type ImagemWhereInput = {
    AND?: ImagemWhereInput | ImagemWhereInput[]
    OR?: ImagemWhereInput[]
    NOT?: ImagemWhereInput | ImagemWhereInput[]
    id?: IntFilter<"Imagem"> | number
    url?: StringFilter<"Imagem"> | string
    descricao?: StringNullableFilter<"Imagem"> | string | null
    ordem?: IntFilter<"Imagem"> | number
    postId?: IntFilter<"Imagem"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ImagemOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type ImagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagemWhereInput | ImagemWhereInput[]
    OR?: ImagemWhereInput[]
    NOT?: ImagemWhereInput | ImagemWhereInput[]
    url?: StringFilter<"Imagem"> | string
    descricao?: StringNullableFilter<"Imagem"> | string | null
    ordem?: IntFilter<"Imagem"> | number
    postId?: IntFilter<"Imagem"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type ImagemOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrder
    postId?: SortOrder
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
    ordem?: IntWithAggregatesFilter<"Imagem"> | number
    postId?: IntWithAggregatesFilter<"Imagem"> | number
  }

  export type ComentarioWhereInput = {
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    id?: IntFilter<"Comentario"> | number
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    postId?: IntFilter<"Comentario"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ComentarioOrderByWithRelationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ComentarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComentarioWhereInput | ComentarioWhereInput[]
    OR?: ComentarioWhereInput[]
    NOT?: ComentarioWhereInput | ComentarioWhereInput[]
    conteudo?: StringFilter<"Comentario"> | string
    criadoEm?: DateTimeFilter<"Comentario"> | Date | string
    autorId?: IntFilter<"Comentario"> | number
    postId?: IntFilter<"Comentario"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type ComentarioOrderByWithAggregationInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
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
    postId?: IntWithAggregatesFilter<"Comentario"> | number
  }

  export type CurtidaWhereInput = {
    AND?: CurtidaWhereInput | CurtidaWhereInput[]
    OR?: CurtidaWhereInput[]
    NOT?: CurtidaWhereInput | CurtidaWhereInput[]
    id?: IntFilter<"Curtida"> | number
    autorId?: IntFilter<"Curtida"> | number
    postId?: IntFilter<"Curtida"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CurtidaOrderByWithRelationInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
    autor?: UsuarioOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type CurtidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    autorId_postId?: CurtidaAutorIdPostIdCompoundUniqueInput
    AND?: CurtidaWhereInput | CurtidaWhereInput[]
    OR?: CurtidaWhereInput[]
    NOT?: CurtidaWhereInput | CurtidaWhereInput[]
    autorId?: IntFilter<"Curtida"> | number
    postId?: IntFilter<"Curtida"> | number
    autor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "autorId_postId">

  export type CurtidaOrderByWithAggregationInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
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
    autorId?: IntWithAggregatesFilter<"Curtida"> | number
    postId?: IntWithAggregatesFilter<"Curtida"> | number
  }

  export type UsuarioCreateInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUpdateInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutPostsInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autorId: number
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autorId: number
  }

  export type PostUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateInput = {
    url: string
    descricao?: string | null
    ordem?: number
    post: PostCreateNestedOneWithoutImagensInput
  }

  export type ImagemUncheckedCreateInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number
    postId: number
  }

  export type ImagemUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutImagensNestedInput
  }

  export type ImagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateManyInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number
    postId: number
  }

  export type ImagemUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
    post: PostCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
  }

  export type ComentarioUpdateInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
    post?: PostUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioCreateManyInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
    postId: number
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
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaCreateInput = {
    autor: UsuarioCreateNestedOneWithoutCurtidasInput
    post: PostCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateInput = {
    id?: number
    autorId: number
    postId: number
  }

  export type CurtidaUpdateInput = {
    autor?: UsuarioUpdateOneRequiredWithoutCurtidasNestedInput
    post?: PostUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaCreateManyInput = {
    id?: number
    autorId: number
    postId: number
  }

  export type CurtidaUpdateManyMutationInput = {

  }

  export type CurtidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
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

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
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

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComentarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurtidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nomeUsuario?: SortOrder
    email?: SortOrder
    senhaHash?: SortOrder
    criadoEm?: SortOrder
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ImagemListRelationFilter = {
    every?: ImagemWhereInput
    some?: ImagemWhereInput
    none?: ImagemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    categoria?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    categoria?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    categoria?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
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

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ImagemCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ImagemSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    postId?: SortOrder
  }

  export type ComentarioCountOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type ComentarioAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type ComentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type ComentarioMinOrderByAggregateInput = {
    id?: SortOrder
    conteudo?: SortOrder
    criadoEm?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type ComentarioSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaAutorIdPostIdCompoundUniqueInput = {
    autorId: number
    postId: number
  }

  export type CurtidaCountOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaAvgOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaMaxOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaMinOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type CurtidaSumOrderByAggregateInput = {
    id?: SortOrder
    autorId?: SortOrder
    postId?: SortOrder
  }

  export type PostCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaCreateNestedManyWithoutAutorInput = {
    create?: XOR<CurtidaCreateWithoutAutorInput, CurtidaUncheckedCreateWithoutAutorInput> | CurtidaCreateWithoutAutorInput[] | CurtidaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutAutorInput | CurtidaCreateOrConnectWithoutAutorInput[]
    createMany?: CurtidaCreateManyAutorInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput> | ComentarioCreateWithoutAutorInput[] | ComentarioUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutAutorInput | ComentarioCreateOrConnectWithoutAutorInput[]
    createMany?: ComentarioCreateManyAutorInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<CurtidaCreateWithoutAutorInput, CurtidaUncheckedCreateWithoutAutorInput> | CurtidaCreateWithoutAutorInput[] | CurtidaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutAutorInput | CurtidaCreateOrConnectWithoutAutorInput[]
    createMany?: CurtidaCreateManyAutorInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutorInput | PostUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutorInput | PostUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutorInput | PostUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
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

  export type CurtidaUpdateManyWithoutAutorNestedInput = {
    create?: XOR<CurtidaCreateWithoutAutorInput, CurtidaUncheckedCreateWithoutAutorInput> | CurtidaCreateWithoutAutorInput[] | CurtidaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutAutorInput | CurtidaCreateOrConnectWithoutAutorInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutAutorInput | CurtidaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: CurtidaCreateManyAutorInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutAutorInput | CurtidaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutAutorInput | CurtidaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput> | PostCreateWithoutAutorInput[] | PostUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutorInput | PostCreateOrConnectWithoutAutorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutorInput | PostUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: PostCreateManyAutorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutorInput | PostUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutorInput | PostUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
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

  export type CurtidaUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<CurtidaCreateWithoutAutorInput, CurtidaUncheckedCreateWithoutAutorInput> | CurtidaCreateWithoutAutorInput[] | CurtidaUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutAutorInput | CurtidaCreateOrConnectWithoutAutorInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutAutorInput | CurtidaUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: CurtidaCreateManyAutorInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutAutorInput | CurtidaUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutAutorInput | CurtidaUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPostsInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ImagemCreateNestedManyWithoutPostInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
  }

  export type ComentarioCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaCreateNestedManyWithoutPostInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type ImagemUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
  }

  export type ComentarioUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
  }

  export type CurtidaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPostsInput
    upsert?: UsuarioUpsertWithoutPostsInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPostsInput, UsuarioUpdateWithoutPostsInput>, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type ImagemUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    upsert?: ImagemUpsertWithWhereUniqueWithoutPostInput | ImagemUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    set?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    disconnect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    delete?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    update?: ImagemUpdateWithWhereUniqueWithoutPostInput | ImagemUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImagemUpdateManyWithWhereWithoutPostInput | ImagemUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
  }

  export type ComentarioUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUpdateManyWithoutPostNestedInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutPostInput | CurtidaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutPostInput | CurtidaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutPostInput | CurtidaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type ImagemUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput> | ImagemCreateWithoutPostInput[] | ImagemUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ImagemCreateOrConnectWithoutPostInput | ImagemCreateOrConnectWithoutPostInput[]
    upsert?: ImagemUpsertWithWhereUniqueWithoutPostInput | ImagemUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ImagemCreateManyPostInputEnvelope
    set?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    disconnect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    delete?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    connect?: ImagemWhereUniqueInput | ImagemWhereUniqueInput[]
    update?: ImagemUpdateWithWhereUniqueWithoutPostInput | ImagemUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ImagemUpdateManyWithWhereWithoutPostInput | ImagemUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
  }

  export type ComentarioUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput> | ComentarioCreateWithoutPostInput[] | ComentarioUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ComentarioCreateOrConnectWithoutPostInput | ComentarioCreateOrConnectWithoutPostInput[]
    upsert?: ComentarioUpsertWithWhereUniqueWithoutPostInput | ComentarioUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ComentarioCreateManyPostInputEnvelope
    set?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    disconnect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    delete?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    connect?: ComentarioWhereUniqueInput | ComentarioWhereUniqueInput[]
    update?: ComentarioUpdateWithWhereUniqueWithoutPostInput | ComentarioUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ComentarioUpdateManyWithWhereWithoutPostInput | ComentarioUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ComentarioScalarWhereInput | ComentarioScalarWhereInput[]
  }

  export type CurtidaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput> | CurtidaCreateWithoutPostInput[] | CurtidaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CurtidaCreateOrConnectWithoutPostInput | CurtidaCreateOrConnectWithoutPostInput[]
    upsert?: CurtidaUpsertWithWhereUniqueWithoutPostInput | CurtidaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CurtidaCreateManyPostInputEnvelope
    set?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    disconnect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    delete?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    connect?: CurtidaWhereUniqueInput | CurtidaWhereUniqueInput[]
    update?: CurtidaUpdateWithWhereUniqueWithoutPostInput | CurtidaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CurtidaUpdateManyWithWhereWithoutPostInput | CurtidaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutImagensInput = {
    create?: XOR<PostCreateWithoutImagensInput, PostUncheckedCreateWithoutImagensInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagensInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutImagensNestedInput = {
    create?: XOR<PostCreateWithoutImagensInput, PostUncheckedCreateWithoutImagensInput>
    connectOrCreate?: PostCreateOrConnectWithoutImagensInput
    upsert?: PostUpsertWithoutImagensInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutImagensInput, PostUpdateWithoutImagensInput>, PostUncheckedUpdateWithoutImagensInput>
  }

  export type UsuarioCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutComentariosInput = {
    create?: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostCreateOrConnectWithoutComentariosInput
    connect?: PostWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutComentariosInput
    upsert?: UsuarioUpsertWithoutComentariosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutComentariosInput, UsuarioUpdateWithoutComentariosInput>, UsuarioUncheckedUpdateWithoutComentariosInput>
  }

  export type PostUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: PostCreateOrConnectWithoutComentariosInput
    upsert?: PostUpsertWithoutComentariosInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutComentariosInput, PostUpdateWithoutComentariosInput>, PostUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuarioCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCurtidasInput = {
    create?: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PostCreateOrConnectWithoutCurtidasInput
    connect?: PostWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCurtidasInput
    upsert?: UsuarioUpsertWithoutCurtidasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCurtidasInput, UsuarioUpdateWithoutCurtidasInput>, UsuarioUncheckedUpdateWithoutCurtidasInput>
  }

  export type PostUpdateOneRequiredWithoutCurtidasNestedInput = {
    create?: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
    connectOrCreate?: PostCreateOrConnectWithoutCurtidasInput
    upsert?: PostUpsertWithoutCurtidasInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCurtidasInput, PostUpdateWithoutCurtidasInput>, PostUncheckedUpdateWithoutCurtidasInput>
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

  export type PostCreateWithoutAutorInput = {
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    imagens?: ImagemCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAutorInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAutorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput>
  }

  export type PostCreateManyAutorInputEnvelope = {
    data: PostCreateManyAutorInput | PostCreateManyAutorInput[]
  }

  export type ComentarioCreateWithoutAutorInput = {
    conteudo: string
    criadoEm?: Date | string
    post: PostCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutAutorInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    postId: number
  }

  export type ComentarioCreateOrConnectWithoutAutorInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutAutorInput, ComentarioUncheckedCreateWithoutAutorInput>
  }

  export type ComentarioCreateManyAutorInputEnvelope = {
    data: ComentarioCreateManyAutorInput | ComentarioCreateManyAutorInput[]
  }

  export type CurtidaCreateWithoutAutorInput = {
    post: PostCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateWithoutAutorInput = {
    id?: number
    postId: number
  }

  export type CurtidaCreateOrConnectWithoutAutorInput = {
    where: CurtidaWhereUniqueInput
    create: XOR<CurtidaCreateWithoutAutorInput, CurtidaUncheckedCreateWithoutAutorInput>
  }

  export type CurtidaCreateManyAutorInputEnvelope = {
    data: CurtidaCreateManyAutorInput | CurtidaCreateManyAutorInput[]
  }

  export type PostUpsertWithWhereUniqueWithoutAutorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAutorInput, PostUncheckedUpdateWithoutAutorInput>
    create: XOR<PostCreateWithoutAutorInput, PostUncheckedCreateWithoutAutorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAutorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAutorInput, PostUncheckedUpdateWithoutAutorInput>
  }

  export type PostUpdateManyWithWhereWithoutAutorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAutorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    titulo?: StringFilter<"Post"> | string
    conteudo?: StringNullableFilter<"Post"> | string | null
    categoria?: StringFilter<"Post"> | string
    criadoEm?: DateTimeFilter<"Post"> | Date | string
    autorId?: IntFilter<"Post"> | number
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
    postId?: IntFilter<"Comentario"> | number
  }

  export type CurtidaUpsertWithWhereUniqueWithoutAutorInput = {
    where: CurtidaWhereUniqueInput
    update: XOR<CurtidaUpdateWithoutAutorInput, CurtidaUncheckedUpdateWithoutAutorInput>
    create: XOR<CurtidaCreateWithoutAutorInput, CurtidaUncheckedCreateWithoutAutorInput>
  }

  export type CurtidaUpdateWithWhereUniqueWithoutAutorInput = {
    where: CurtidaWhereUniqueInput
    data: XOR<CurtidaUpdateWithoutAutorInput, CurtidaUncheckedUpdateWithoutAutorInput>
  }

  export type CurtidaUpdateManyWithWhereWithoutAutorInput = {
    where: CurtidaScalarWhereInput
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyWithoutAutorInput>
  }

  export type CurtidaScalarWhereInput = {
    AND?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
    OR?: CurtidaScalarWhereInput[]
    NOT?: CurtidaScalarWhereInput | CurtidaScalarWhereInput[]
    id?: IntFilter<"Curtida"> | number
    autorId?: IntFilter<"Curtida"> | number
    postId?: IntFilter<"Curtida"> | number
  }

  export type UsuarioCreateWithoutPostsInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutPostsInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutPostsInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
  }

  export type ImagemCreateWithoutPostInput = {
    url: string
    descricao?: string | null
    ordem?: number
  }

  export type ImagemUncheckedCreateWithoutPostInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number
  }

  export type ImagemCreateOrConnectWithoutPostInput = {
    where: ImagemWhereUniqueInput
    create: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput>
  }

  export type ImagemCreateManyPostInputEnvelope = {
    data: ImagemCreateManyPostInput | ImagemCreateManyPostInput[]
  }

  export type ComentarioCreateWithoutPostInput = {
    conteudo: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutComentariosInput
  }

  export type ComentarioUncheckedCreateWithoutPostInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
  }

  export type ComentarioCreateOrConnectWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioCreateManyPostInputEnvelope = {
    data: ComentarioCreateManyPostInput | ComentarioCreateManyPostInput[]
  }

  export type CurtidaCreateWithoutPostInput = {
    autor: UsuarioCreateNestedOneWithoutCurtidasInput
  }

  export type CurtidaUncheckedCreateWithoutPostInput = {
    id?: number
    autorId: number
  }

  export type CurtidaCreateOrConnectWithoutPostInput = {
    where: CurtidaWhereUniqueInput
    create: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput>
  }

  export type CurtidaCreateManyPostInputEnvelope = {
    data: CurtidaCreateManyPostInput | CurtidaCreateManyPostInput[]
  }

  export type UsuarioUpsertWithoutPostsInput = {
    update: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
    create: XOR<UsuarioCreateWithoutPostsInput, UsuarioUncheckedCreateWithoutPostsInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPostsInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPostsInput, UsuarioUncheckedUpdateWithoutPostsInput>
  }

  export type UsuarioUpdateWithoutPostsInput = {
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type ImagemUpsertWithWhereUniqueWithoutPostInput = {
    where: ImagemWhereUniqueInput
    update: XOR<ImagemUpdateWithoutPostInput, ImagemUncheckedUpdateWithoutPostInput>
    create: XOR<ImagemCreateWithoutPostInput, ImagemUncheckedCreateWithoutPostInput>
  }

  export type ImagemUpdateWithWhereUniqueWithoutPostInput = {
    where: ImagemWhereUniqueInput
    data: XOR<ImagemUpdateWithoutPostInput, ImagemUncheckedUpdateWithoutPostInput>
  }

  export type ImagemUpdateManyWithWhereWithoutPostInput = {
    where: ImagemScalarWhereInput
    data: XOR<ImagemUpdateManyMutationInput, ImagemUncheckedUpdateManyWithoutPostInput>
  }

  export type ImagemScalarWhereInput = {
    AND?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
    OR?: ImagemScalarWhereInput[]
    NOT?: ImagemScalarWhereInput | ImagemScalarWhereInput[]
    id?: IntFilter<"Imagem"> | number
    url?: StringFilter<"Imagem"> | string
    descricao?: StringNullableFilter<"Imagem"> | string | null
    ordem?: IntFilter<"Imagem"> | number
    postId?: IntFilter<"Imagem"> | number
  }

  export type ComentarioUpsertWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    update: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
    create: XOR<ComentarioCreateWithoutPostInput, ComentarioUncheckedCreateWithoutPostInput>
  }

  export type ComentarioUpdateWithWhereUniqueWithoutPostInput = {
    where: ComentarioWhereUniqueInput
    data: XOR<ComentarioUpdateWithoutPostInput, ComentarioUncheckedUpdateWithoutPostInput>
  }

  export type ComentarioUpdateManyWithWhereWithoutPostInput = {
    where: ComentarioScalarWhereInput
    data: XOR<ComentarioUpdateManyMutationInput, ComentarioUncheckedUpdateManyWithoutPostInput>
  }

  export type CurtidaUpsertWithWhereUniqueWithoutPostInput = {
    where: CurtidaWhereUniqueInput
    update: XOR<CurtidaUpdateWithoutPostInput, CurtidaUncheckedUpdateWithoutPostInput>
    create: XOR<CurtidaCreateWithoutPostInput, CurtidaUncheckedCreateWithoutPostInput>
  }

  export type CurtidaUpdateWithWhereUniqueWithoutPostInput = {
    where: CurtidaWhereUniqueInput
    data: XOR<CurtidaUpdateWithoutPostInput, CurtidaUncheckedUpdateWithoutPostInput>
  }

  export type CurtidaUpdateManyWithWhereWithoutPostInput = {
    where: CurtidaScalarWhereInput
    data: XOR<CurtidaUpdateManyMutationInput, CurtidaUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutImagensInput = {
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutPostsInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutImagensInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autorId: number
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutImagensInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutImagensInput, PostUncheckedCreateWithoutImagensInput>
  }

  export type PostUpsertWithoutImagensInput = {
    update: XOR<PostUpdateWithoutImagensInput, PostUncheckedUpdateWithoutImagensInput>
    create: XOR<PostCreateWithoutImagensInput, PostUncheckedCreateWithoutImagensInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutImagensInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutImagensInput, PostUncheckedUpdateWithoutImagensInput>
  }

  export type PostUpdateWithoutImagensInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutImagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsuarioCreateWithoutComentariosInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutComentariosInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutComentariosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutComentariosInput, UsuarioUncheckedCreateWithoutComentariosInput>
  }

  export type PostCreateWithoutComentariosInput = {
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutPostsInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
    curtidas?: CurtidaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutComentariosInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autorId: number
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
    curtidas?: CurtidaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutComentariosInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
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
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type PostUpsertWithoutComentariosInput = {
    update: XOR<PostUpdateWithoutComentariosInput, PostUncheckedUpdateWithoutComentariosInput>
    create: XOR<PostCreateWithoutComentariosInput, PostUncheckedCreateWithoutComentariosInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutComentariosInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutComentariosInput, PostUncheckedUpdateWithoutComentariosInput>
  }

  export type PostUpdateWithoutComentariosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutComentariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UsuarioCreateWithoutCurtidasInput = {
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    posts?: PostCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioCreateNestedManyWithoutAutorInput
  }

  export type UsuarioUncheckedCreateWithoutCurtidasInput = {
    id?: number
    nomeUsuario: string
    email: string
    senhaHash: string
    criadoEm?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutAutorInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutAutorInput
  }

  export type UsuarioCreateOrConnectWithoutCurtidasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCurtidasInput, UsuarioUncheckedCreateWithoutCurtidasInput>
  }

  export type PostCreateWithoutCurtidasInput = {
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autor: UsuarioCreateNestedOneWithoutPostsInput
    imagens?: ImagemCreateNestedManyWithoutPostInput
    comentarios?: ComentarioCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCurtidasInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
    autorId: number
    imagens?: ImagemUncheckedCreateNestedManyWithoutPostInput
    comentarios?: ComentarioUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCurtidasInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
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
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUpdateManyWithoutAutorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeUsuario?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senhaHash?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutAutorNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type PostUpsertWithoutCurtidasInput = {
    update: XOR<PostUpdateWithoutCurtidasInput, PostUncheckedUpdateWithoutCurtidasInput>
    create: XOR<PostCreateWithoutCurtidasInput, PostUncheckedCreateWithoutCurtidasInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCurtidasInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCurtidasInput, PostUncheckedUpdateWithoutCurtidasInput>
  }

  export type PostUpdateWithoutCurtidasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutPostsNestedInput
    imagens?: ImagemUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCurtidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyAutorInput = {
    id?: number
    titulo: string
    conteudo?: string | null
    categoria: string
    criadoEm?: Date | string
  }

  export type ComentarioCreateManyAutorInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    postId: number
  }

  export type CurtidaCreateManyAutorInput = {
    id?: number
    postId: number
  }

  export type PostUpdateWithoutAutorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    imagens?: ImagemUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    imagens?: ImagemUncheckedUpdateManyWithoutPostNestedInput
    comentarios?: ComentarioUncheckedUpdateManyWithoutPostNestedInput
    curtidas?: CurtidaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComentarioUpdateWithoutAutorInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUpdateWithoutAutorInput = {
    post?: PostUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUncheckedUpdateManyWithoutAutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemCreateManyPostInput = {
    id?: number
    url: string
    descricao?: string | null
    ordem?: number
  }

  export type ComentarioCreateManyPostInput = {
    id?: number
    conteudo: string
    criadoEm?: Date | string
    autorId: number
  }

  export type CurtidaCreateManyPostInput = {
    id?: number
    autorId: number
  }

  export type ImagemUpdateWithoutPostInput = {
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ImagemUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUpdateWithoutPostInput = {
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autor?: UsuarioUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentarioUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type ComentarioUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    conteudo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUpdateWithoutPostInput = {
    autor?: UsuarioUpdateOneRequiredWithoutCurtidasNestedInput
  }

  export type CurtidaUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
  }

  export type CurtidaUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    autorId?: IntFieldUpdateOperationsInput | number
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