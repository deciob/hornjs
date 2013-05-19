horn = {}

toString = Object.prototype.toString

str = (s) ->
  if toString.call(s) == "[object String]"
    return s
  else 
    trow new TypeError "It is not a string!"

typeOf = (type) ->
  type = str type
  (o) ->
    if toString.call(o) == type
      return o
    else
      throw new TypeError "#{o} is not a #{type}!"

num = typeOf "[object Number]"
bool = typeOf "[object Boolean]"
obj = typeOf "[object Object]"
undef = typeOf "[object Undefined]"
arr = typeOf "[object Array]"
func = typeOf "[object Function]"


# http://jsperf.com/recursive-max
# max :: (Ord a) => [a] -> a -> a
max = (seq, mx) ->
  mx = mx or 0
  seq = arr seq
  mx = num mx
  throw new Error("maximum of empty list")  if seq.length is 0
  return seq[0]  if seq.length is 1 and seq[0] >= mx
  return mx  if seq.length is 1 and seq[0] < mx
  head = seq.shift()
  mx = head  if head > mx
  max seq, mx


horn.max = max


if typeof define is "function" and define.amd
  define "horn", [], ->
    horn
else
  @horn = horn





