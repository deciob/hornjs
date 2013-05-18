horn = {}

# max :: (Ord a) => [a] -> a
max = (seq, mx) ->
  mx = mx or 0
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





